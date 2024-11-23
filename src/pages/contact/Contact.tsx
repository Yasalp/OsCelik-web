import React from "react";
import instegram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import telephone from "../../assets/telephone-call.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h1>İletişim</h1>
      <div className="icons">
        <div>
          <img src={telephone} alt="simge bulunamadı" />
          <p>0532 575 44 66</p>
        </div>
        <div>
          <img src={instegram} alt="simge bulunamadı" />
          <p>osmaniyecelikvilla</p>
        </div>
        <div>
          <img src={whatsapp} alt="whatsapp bulunamadı" />
          <p>0532 575 44 66</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
