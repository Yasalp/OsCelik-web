import { useState } from "react";
import "./HomePage.css";
import logo from "../../assets/logo.png";
import instegram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import telephone from "../../assets/telephone-call.png";
import CustomSlider from "../../components/custom-slider/CustomSlider";
import anahtarTeslim from "../../assets/anahtar-teslim.jpeg";
import hafifcelik from "../../assets/hafif-celik-villa-9.jpg";
import isiyalitimi from "../../assets/isiyalitimi.jpg";
import ozelproje from "../../assets/ozelproje.jpeg";

const HomePage = () => {
  const [count, setCount] = useState(0);

  const images = [
    { id: 1, src: anahtarTeslim, alt: "Resim 1" },
    { id: 2, src: hafifcelik, alt: "Resim 2" },
    { id: 3, src: isiyalitimi, alt: "Resim 3" },
    { id: 4, src: ozelproje, alt: "Resim 4" },
  ];

  return (
    <div className="container">
      <div className="header">
        <div>
          <img className="logo" src={logo} alt="resim bulunumadı" />
          <h2 className="headerh2">Osmaniye Çelik Villa</h2>
        </div>
      </div>
      <div className="content">
        <div className="contact">
          <p>🏠Hafif Çelik Villa</p>
          <p>🔩Depreme Dayanaklı</p>
          <p>☀️Dört Mevsim Isı yalıtımı</p>
          <p>👫Kişiye Özel Proje</p>
          <p>👍Anahtar Teslim</p>
        </div>
        <div className="slider">
          <CustomSlider images={images} />
        </div>
      </div>

      <div className="bodydown"></div>
    </div>
  );
};

export default HomePage;
