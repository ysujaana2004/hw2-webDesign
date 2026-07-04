export default function MenuCard({ item, onAddToCart }) {
  return (
    <div className="menu-card">
      <div className="menu-img" style={{ backgroundImage: `url('${item.image}')` }}></div>
      <div className="menu-info">
        <div className="menu-header">
          <h3>{item.name}</h3>
          <span className="menu-price">${item.price.toFixed(2)}</span>
        </div>
        <p>{item.description}</p>
        <button className="add-to-cart" onClick={() => onAddToCart(item.id)}>Add to Cart</button>
      </div>
    </div>
  )
}
