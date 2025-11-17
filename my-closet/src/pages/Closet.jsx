import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/base.css";
import "../css/closet.css";
import ClosetFilters from "../components/ClosetFilters.jsx";
import ClosetGrid from "../components/ClosetGrid.jsx";
import Modal from "../components/Modal.jsx";
import { useItems } from "../context/ItemsContext";

export default function Closet() {
  const { items, loading, error, fetchItems } = useItems();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!items) fetchItems();
  }, [items, fetchItems]);

  return (
    <>
      <section className="center">
        <h2>WELCOME TO YOUR CLOSET!</h2>
      </section>

      <ClosetFilters />

      <hr />

      {loading && <p className="center muted">Loading...</p>}
      {error && <p className="center" style={{ color: "#b85c7d" }}>{error}</p>}
      {!loading && !error && items && (
        <ClosetGrid items={items} onOpen={setSelected} />
      )}

      <div className="center" style={{ margin: "30px 0" }}>
        <Link className="btn" to="/upload-item">Add More Items</Link>
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
                <Link className="btn" to="/upload-item">View / Edit Item</Link>
              </p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

