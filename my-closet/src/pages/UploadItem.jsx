import { useState } from "react";
import { API_BASE } from "../api/config";
import "../css/base.css";
import "../css/upload.css";

const TYPES   = ["Top","Pants","Shorts","Sweatshirt","Sweater","Shoes","Dress","Skirt","Jacket","Accessory"];
const SEASONS = ["Spring","Summer","Fall","Winter"];
const FILENAME_PATTERN = /^[\w\-.]+\.(png|jpe?g|webp|gif)$/i; 

const validate = (f) => {
  const errors = {};
  if (!f.title || f.title.trim().length < 2 || f.title.trim().length > 80)
    errors.title = "Title 2–80 characters.";
  if (!TYPES.includes(f.type)) errors.type = "Choose a valid type.";
  if (!SEASONS.includes(f.season)) errors.season = "Choose a valid season.";
  if (!f.color || f.color.trim().length < 2) errors.color = "Color is required.";
  if (!FILENAME_PATTERN.test(f.imgName || ""))
    errors.imgName = "Use a valid image filename (e.g. glitterskirt.png).";
  return errors;
};

export default function UploadItem() {
  const [form, setForm] = useState({
    title: "",
    type: "Top",
    season: "Spring",
    color: "",
    imgName: "",    
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ kind: "idle", text: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus({ kind: "err", text: "Please fix the highlighted fields." });
      return;
    }

    try {
      setStatus({ kind: "loading", text: "Adding…" });
      const res = await fetch(`${API_BASE}/api/clothes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), 
      });

      const text = await res.text();
      let data;
      try { data = JSON.parse(text); } catch { data = { message: text }; }

      if (!res.ok) {
        const msg = data?.details?.join(" • ") || data?.message || `Error ${res.status}`;
        setStatus({ kind: "err", text: msg });
        return;
      }

      setStatus({ kind: "ok", text: "Item added!" });
      setForm({ title: "", type: "Top", season: "Spring", color: "", imgName: "" });
      setErrors({});

    } catch (err) {
      setStatus({ kind: "err", text: err.message || "Network error." });
    }
  };

  return (
    <>
      <section className="center">
        <h2>Upload Item</h2>
        <p className="muted">
          Image files must already exist on the API under <code>/images</code>.
          Enter just the filename (e.g., <code>glitterskirt.png</code>).
        </p>
      </section>

      <div className="upload-wrap">
        <div className="upload-card">
          <form className="upload-form" onSubmit={onSubmit} noValidate>
            <div className="uf-row">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" value={form.title} onChange={onChange} aria-invalid={!!errors.title}/>
              {errors.title && <span className="form-msg err">{errors.title}</span>}
            </div>

            <div className="uf-row">
              <label htmlFor="type">Type</label>
              <select id="type" name="type" value={form.type} onChange={onChange}>
                {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.type && <span className="form-msg err">{errors.type}</span>}
            </div>

            <div className="uf-row">
              <label htmlFor="season">Season</label>
              <select id="season" name="season" value={form.season} onChange={onChange}>
                {SEASONS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.season && <span className="form-msg err">{errors.season}</span>}
            </div>

            <div className="uf-row">
              <label htmlFor="color">Color</label>
              <input id="color" name="color" value={form.color} onChange={onChange} aria-invalid={!!errors.color}/>
              {errors.color && <span className="form-msg err">{errors.color}</span>}
            </div>

            <div className="uf-row uf-row--full">
              <label htmlFor="imgName">Image filename</label>
              <input id="imgName" name="imgName" value={form.imgName} onChange={onChange} placeholder="clothing.png" aria-invalid={!!errors.imgName}/>
              <span className="form-help">Case-sensitive. File must be at <code>/images/yourfile</code> on the API.</span>
              {errors.imgName && <span className="form-msg err">{errors.imgName}</span>}
            </div>

            <div className="uf-row uf-row--full">
              <div className="upload-actions">
                <button className="btn" type="submit" disabled={status.kind === "loading"}>
                  {status.kind === "loading" ? "Adding…" : "Add Item"}
                </button>
                {!!status.text && (
                  <span className={`form-msg ${status.kind === "ok" ? "ok" : "err"}`}>{status.text}</span>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
