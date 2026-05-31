import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.date ||
      !formData.time ||
      !formData.guests
    ) {
      setMessage("Please fill in all booking fields.");
      return;
    }

    setMessage(
      `Thank you, ${formData.name}. Your table for ${formData.guests} guest(s) has been requested on ${formData.date} at ${formData.time}.`
    );

    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "",
    });
  }

  return (
    <main className="section contact-page">
      <h1>Contact & Table Booking</h1>

      <div className="contact-layout">
        <section className="contact-info">
          <h2>Visit Us</h2>
          <p><strong>Location:</strong> Bchamoun, Lebanon</p>
          <p><strong>Email:</strong> info@tastybites.com</p>
          <p><strong>Phone:</strong> +961 70 000 000</p>
          <p><strong>Opening Hours:</strong> 12:00 PM - 11:00 PM</p>
        </section>

        <section className="booking-box">
          <h2>Book a Table</h2>

          <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />

            <label>Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />

            <label>Number of Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
            />

            <button type="submit">Submit Booking</button>
          </form>

          {message && <p className="form-message">{message}</p>}
        </section>
      </div>
    </main>
  );
}

export default Contact;