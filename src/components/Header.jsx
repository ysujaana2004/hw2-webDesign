const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Header({
  isScrolled,
  isMobileNavOpen,
  onToggleMobileNav,
  onCloseMobileNav,
  cartCount,
  onOpenCart,
  activeSection,
}) {
  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <img src="/images/tiger-logo.png" alt="KASHBON Logo" className="logo-img" />
          </a>

          <ul className={`nav-links ${isMobileNavOpen ? 'open' : ''}`} id="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onCloseMobileNav}
                  style={{ color: activeSection === link.href.slice(1) ? 'var(--primary)' : '' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <div className="cart-icon" id="cart-btn" onClick={onOpenCart}>
              <span>CART</span>
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count" id="cart-count">{cartCount}</span>
            </div>
            <div
              className={`hamburger ${isMobileNavOpen ? 'active' : ''}`}
              id="hamburger"
              onClick={onToggleMobileNav}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
