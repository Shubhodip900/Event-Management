import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address </h4>
            <p>Fulia Para, Fulia Boyra, Santipur, Nadia</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>+91-86709-47354</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>palshubhodip9@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.225931531869!2d88.47983122477648!3d23.234864158373632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8dd81bcb34787%3A0xc89bffda3b7cab50!2sFulia%20Para%2C%20Kalipur%2C%20Phulia%2C%20West%20Bengal%20741402!5e0!3m2!1sen!2sin!4v1717411119057!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>Contact</h2>
              <div>
                <input type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                <input type="email" placeholder="E-mail" value={email} onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <input type="text" placeholder="Subject" value={subject} onChange={(e)=> setSubject(e.target.value)}/>
              <textarea rows={10} placeholder="Message" value={message} onChange={(e)=> setMessage(e.target.value)}/>
              <button className="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
