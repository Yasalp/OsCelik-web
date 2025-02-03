import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

import "./Contact.css";

// İletişim
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">İletişim</h1>
        <p className="contact-description">
          Bizimle iletişime geçmek için aşağıdaki yöntemleri kullanabilirsiniz
        </p>

        <div className="contact-icons">
          <div className="contact-item">
            <a href="tel:05325754466" className="contact-link">
              <FaPhoneAlt className="contact-icon" />
              <p className="contact-text">0532 575 44 66</p>
            </a>
          </div>
          <div className="contact-item">
            <a
              href="https://www.instagram.com/osmaniyecelikvilla"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaInstagram className="contact-icon" />
              <p className="contact-text">osmaniyecelikvilla</p>
            </a>
          </div>
          <div className="contact-item">
            <a
              href="https://wa.me/905325754466"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaWhatsapp className="contact-icon" />
              <p className="contact-text">0532 575 44 66</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
