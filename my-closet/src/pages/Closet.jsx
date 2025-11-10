import React from "react";
import { useEffect, useState } from "react";
import "../css/base.css";
import "../css/closet.css";
import ClosetFilters from "../components/ClosetFilters.jsx";
import ClosetGrid from "../components/ClosetGrid.jsx";
import { API_BASE } from "../api/config";
import Modal from "../components/Modal.jsx";

export default function Closet() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setErr("");
        const res = await fetch(`${API_BASE}/api/clothes`);
        if (!res.ok) throw new Error(`API ${res.status}`);
        const data = await res.json();
        const normalized = data.map((it) => ({ ...it, imgUrl: `${API_BASE}${it.img}` }));
        setItems(normalized);
      } catch (e) {
        console.error(e);
        setErr("Could not load closet items.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <>
      <section className="center">
        <h2>WELCOME TO YOUR CLOSET!</h2>
      </section>

      <ClosetFilters />

      <hr />

      {loading && <p className="center muted">Loading...</p>}
      {err && <p className="center" style={{ color: "#b85c7d" }}>{err}</p>}
      {!loading && !err && <ClosetGrid items={items} onOpen={setSelected} />}

      <div className="center" style={{ margin: "30px 0" }}>
        <a className="btn" href="/upload-item">Add More Items</a>
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="columns">
            <div className="two">
              <img
                src={selected.imgUrl}
                alt={selected.title}
                style={{ width: "100%", borderRadius: 10, border: "1px solid var(--border)" }}
              />
            </div>
            <div className="two">
              <h3 style={{ marginTop: 0 }}>{selected.title}</h3>
              <p className="muted">Type: <strong>{selected.type}</strong></p>
              <p className="muted">Color: <strong>{selected.color}</strong></p>
              <p className="muted">Season: <strong>{selected.season}</strong></p>
              <p style={{ marginTop: 16 }}>
                <a className="btn" href="/upload-item">View / Edit Item</a>
              </p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
