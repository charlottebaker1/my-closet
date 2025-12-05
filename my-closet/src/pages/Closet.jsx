import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/base.css";
import "../css/closet.css";
import ClosetFilters from "../components/ClosetFilters.jsx";
import ClosetGrid from "../components/ClosetGrid.jsx";
import Modal from "../components/Modal.jsx";
import { useItems } from "../context/ItemsContext";
import { API_BASE } from "../api/config";

const TYPES   = ["Top","Pants","Shorts","Sweatshirt","Sweater","Shoes","Dress","Skirt","Jacket","Accessory"];
const SEASONS = ["Spring","Summer","Fall","Winter"];

const validateEdit = (f) => {
  const errs = {};
  if ("title"  in f && (f.title.trim().length < 2 || f.title.trim().length > 80)) errs.title  = "Title 2–80 chars.";
  if ("type"   in f && !TYPES.includes(f.type))                                      errs.type   = "Pick a valid type.";
  if ("color"  in f && f.color.trim().length < 2)                                     errs.color  = "Color is too short.";
  if ("season" in f && !SEASONS.includes(f.season))                                   errs.season = "Pick a valid season.";
  return errs;
};

export default function Closet() {
  const { items, loading, error, fetchItems } = useItems();
  const [selected, setSelected] = useState(null);

  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState({});
  const [saveStatus, setSaveStatus] = useState("");

  useEffect(() => {
    if (!items) fetchItems();
  }, [items, fetchItems]);

  useEffect(() => {
    if (selected) {
      setEditing(false);
      setSaveStatus("");
      setEditForm({
        title:  selected.title,
        type:   selected.type,
        color:  selected.color,
        season: selected.season,
      });
    } else {
      setEditing(false);
      setSaveStatus("");
      setEditForm({});
    }
  }, [selected]);

  const openItem = (it) => setSelected(it);
  const closeModal = () => setSelected(null);

  const onEditChange = (e) => setEditForm({ ...editForm, [e.target.name]: e.target.value });

  const saveEdit = async () => {
    if (!selected?._id) return;
    const errs = validateEdit(editForm);
    if (Object.keys(errs).length) {
      setSaveStatus(Object.values(errs).join(" • "));
      return;
    }
    try {
      setSaveStatus("Saving…");
      const res = await fetch(`${API_BASE}/api/clothes/${selected._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Update failed");
      await fetchItems();
      setSelected(data.item || selected);
      setEditing(false);
      setSaveStatus("Saved!");
      setTimeout(() => setSaveStatus(""), 1000);
    } catch (e) {
      setSaveStatus(e.message || "Network error");
    }
  };

  const deleteItem = async () => {
    if (!selected?._id) return;
    if (!window.confirm("Delete this item?")) return;
    try {
      setSaveStatus("Deleting…");
      const res = await fetch(`${API_BASE}/api/clothes/${selected._id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Delete failed");
      await fetchItems();
      closeModal();
    } catch (e) {
      setSaveStatus(e.message || "Network error");
    }
  };

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
        <ClosetGrid items={items} onOpen={openItem} />
      )}

      <div className="center" style={{ margin: "30px 0" }}>
        <Link className="btn" to="/upload-item">Add More Items</Link>
      </div>

      <Modal open={!!selected} onClose={closeModal}>
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
              {!editing ? (
                <>
                  <h3 style={{ marginTop: 0 }}>{selected.title}</h3>
                  <p className="muted">Type: <strong>{selected.type}</strong></p>
                  <p className="muted">Color: <strong>{selected.color}</strong></p>
                  <p className="muted">Season: <strong>{selected.season}</strong></p>
                  <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
                    <button className="btn" onClick={() => setEditing(true)}>Edit</button>
                    <button
                      className="btn"
                      style={{ background:"#fff", color:"var(--ink)", borderColor:"var(--border)" }}
                      onClick={deleteItem}
                    >
                      Delete
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 style={{ marginTop: 0 }}>Edit Item</h3>

                  <div className="field">
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" value={editForm.title || ""} onChange={onEditChange}/>
                  </div>

                  <div className="field">
                    <label htmlFor="type">Type</label>
                    <select id="type" name="type" value={editForm.type || "Top"} onChange={onEditChange}>
                      {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div className="field">
                    <label htmlFor="color">Color</label>
                    <input id="color" name="color" value={editForm.color || ""} onChange={onEditChange}/>
                  </div>

                  <div className="field">
                    <label htmlFor="season">Season</label>
                    <select id="season" name="season" value={editForm.season || "Spring"} onChange={onEditChange}>
                      {SEASONS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div style={{ display:"flex", gap:8, alignItems:"center", marginTop:8 }}>
                    <button className="btn" onClick={saveEdit}>Save</button>
                    <button
                      className="btn"
                      style={{ background:"#fff", color:"var(--ink)", borderColor:"var(--border)" }}
                      onClick={() => setEditing(false)}
                    >
                      Cancel
                    </button>
                    {saveStatus && <span className="form-msg" style={{ marginLeft:8 }}>{saveStatus}</span>}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
