export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="section container">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-grid">
        <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required placeholder="Your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required placeholder="your@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" required placeholder="Tell us how we can help..."></textarea>
          </div>
          <button type="submit" className="add-to-cart">Send Message</button>
        </form>

        <div className="contact-map">
          <iframe
            title="KASHBON Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.9778!3d40.7659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f9a1717c13%3A0x55110196631e721d!2sCentral%20Park%20South%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1687000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
