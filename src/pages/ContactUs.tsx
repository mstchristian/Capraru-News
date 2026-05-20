import "./contact-us.css";
import { useTextCounter } from "../hooks/useTextCounter";
import { useSafeText } from "../hooks/useSafeText";
import { useState } from "react";
import { useEmail } from "../hooks/useEmail";

function ContactUs() {
  const { text, currentLength, setText } = useTextCounter(5000);
  const { handleSafeInput } = useSafeText();
  const { sendEmail } = useEmail();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const result = await sendEmail({
    name,
    email,
    message: text,
  });

  if (result.success) {
    alert("Mensaje enviado 🚀");
    setName("");
    setEmail("");
    setText("");
  } else {
    alert("Error al enviar ❌");
  }
};

  return (
    <div className="contact-us">
      <div className="contact-us__content">
        <h1>Contáctanos</h1>
        <form className="contact-us__form" onSubmit={handleSubmit}>
          <label className="contact-us__label" htmlFor="name">
            Nombre
          </label>
          <input
            className="contact-us__input"
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={handleSafeInput(setName)}
          />
          <label className="contact-us__label" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className="contact-us__input"
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={handleSafeInput(setEmail)}
          />
          <label className="contact-us__label" htmlFor="message">
            Mensaje
          </label>
          <textarea
            className="contact-us__textarea"
            id="message"
            name="message"
            rows={10}
            required
            value={text}
            onChange={handleSafeInput(setText)}
          />
          <p className="contact-us__counter">{currentLength} / 5000</p>
          <button className="contact-us__submit" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
