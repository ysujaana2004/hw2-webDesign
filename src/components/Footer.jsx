export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>KASHBON</h3>
            <p>Authentic flavors, every bite.</p>
          </div>
          <div>
            <h4>Hours</h4>
            <p>Mon - Thu: 4 PM - 10 PM</p>
            <p>Fri - Sat: 12 PM - 12 AM</p>
            <p>Sun: 10 AM - 9 PM</p>
          </div>
          <div>
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <p>&copy; 2026 KASHBON. All rights reserved.</p>
      </div>
    </footer>
  )
}
