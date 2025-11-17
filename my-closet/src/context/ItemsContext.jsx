import { createContext, useContext, useMemo, useState } from "react";
import { API_BASE } from "../api/config";

const ItemsContext = createContext();

export function ItemsProvider({ children }) {
  const [items, setItems] = useState(null);   // null = not fetched yet
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const normalize = (list) =>
    list.map((it) => ({
      ...it,
      imgUrl: it.img?.startsWith("http") ? it.img : `${API_BASE}${it.img}`,
    }));

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(`${API_BASE}/api/clothes`);
      if (!res.ok) throw new Error(`API ${res.status}`);
      const data = await res.json();
      setItems(normalize(data));
    } catch (e) {
      setError("Could not load closet items.");
    } finally {
      setLoading(false);
    }
  };

  const addItem = (item) => {
    const normalized = normalize([item])[0];
    setItems((prev) => (prev ? [normalized, ...prev] : [normalized]));
  };

  const value = useMemo(
    () => ({ items, loading, error, fetchItems, addItem }),
    [items, loading, error]
  );

  return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>;
}

export function useItems() {
  return useContext(ItemsContext);
}
