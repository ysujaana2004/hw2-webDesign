export default function CartDrawer({
  isOpen,
  cart,
  onClose,
  onRemoveItem,
  onUpdateQuantity,
  onClearCart,
}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`} id="cart-drawer">
      <div className="cart-header">
        <h3>Your Cart</h3>
        <span className="close-cart" id="close-cart" onClick={onClose}>
          <i className="fas fa-times"></i>
        </span>
      </div>
      <div className="cart-items" id="cart-items-container">
        {cart.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-dim)' }}>
            Your cart is empty.
          </p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-img" style={{ backgroundImage: `url('${item.image}')` }}></div>
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <span className="price">${item.price.toFixed(2)}</span>
                <span className="remove-item" onClick={() => onRemoveItem(item.id)}>Remove</span>
              </div>
              <div className="cart-qty">
                <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-footer">
        <div className="cart-total">
          <span>Total</span>
          <span id="cart-total-price">${total.toFixed(2)}</span>
        </div>
        <button className="add-to-cart">Checkout Now</button>
        <button className="clear-cart" id="clear-cart" onClick={onClearCart}>Clear Cart</button>
      </div>
    </div>
  )
}
