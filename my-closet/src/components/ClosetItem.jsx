import "../css/closetItem.css";

export default function ClosetItem({ item, onOpen }) {
  return (
    <div className="item">
      <button className="item-btn" onClick={() => onOpen(item)} aria-label={`View ${item.title}`}>
        <img src={item.imgUrl} alt={item.title} />
        <h3>{item.title}</h3>
      </button>
    </div>
  );
}
