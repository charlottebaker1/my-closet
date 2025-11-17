import ClosetItem from "./ClosetItem.jsx";
import "../css/base.css";
import "../css/closet.css";

export default function ClosetGrid({ items = [], onOpen }) {
  return (
    <section id="closet-grid">
      {items.map((it) => (
        <ClosetItem key={it._id} item={it} onOpen={onOpen} />
      ))}
    </section>
  );
}
