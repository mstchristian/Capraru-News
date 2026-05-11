import "./contact-us.css";

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-us__content">
        <h1>Contáctanos</h1>
        <form className="contact-us__form">
          <label htmlFor="name">Nombre</label>
          <input
            className="contact-us__input"
            type="text"
            id="name"
            name="name"
            required
          />
          <label htmlFor="email">Correo electrónico</label>
          <input
            className="contact-us__input"
            type="email"
            id="email"
            name="email"
            required
          />
          <label htmlFor="message">Mensaje</label>
          <textarea
            className="contact-us__textarea"
            id="message"
            name="message"
            rows={10}
            required
          ></textarea>
          <button className="contact-us__button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
