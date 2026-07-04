import { MENU_ITEMS } from '../data/menuItems'
import MenuCard from './MenuCard'

export default function Menu({ onAddToCart }) {
  return (
    <section id="menu" className="section container">
      <h2 className="section-title">The Seasonal Menu</h2>
      <div className="menu-grid" id="menu-container">
        {MENU_ITEMS.map((item) => (
          <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}
