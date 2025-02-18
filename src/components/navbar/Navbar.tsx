import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignRight, FiX } from "react-icons/fi";
import "./Navbar.css";

import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("modal: ", isOpen);
  };

  const handleClickOutside = (event: any) => {
    // Menü açık ve tıklanan öğe menünün dışında ise menüyü kapatır
    if (!event.target.closest(".menu-mobile") && isOpen) {
      console.log("close modal");
      setTimeout(() => {
        // Bu blok 2 saniye sonra çalışacak
        setIsOpen(false);
      }, 500);
    }
  };

  useEffect(() => {
    // Belgeye tıklama olay dinleyicisi eklenir
    document.addEventListener("click", handleClickOutside);

    // Bileşen kaldırıldığında olay dinleyicisini temizlenir
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="navbar">
      <div className="logoContainer">
        <Link to="/" className="logo-link">
          <img className="logo" src={logo} alt="resim bulunumadı" />
        </Link>
        <h2 className="headerh2">Osmaniye Çelik Villa</h2>
      </div>
      <div className="menu">
        <Link to="/" className="menu-item">
          Anasayfa
        </Link>
        <Link to="/contact" className="menu-item">
          İletişim
        </Link>
        <Link to="/project" className="menu-item">
          Projeler
        </Link>
      </div>
      <div className="menu-mobile" onClick={toggleMenu}>
        <FiAlignRight color="white" size={34} />
      </div>
      {isOpen && (
        <div className="modal-open">
          <div className="close">
            <FiX color="white" size={25} onClick={toggleMenu} />
          </div>
          <Link to="/" className="menu-item">
            Anasayfa
          </Link>
          <Link to="/contact" className="menu-item">
            İletişim
          </Link>
          <Link to="/project" className="menu-item">
            Projeler
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
