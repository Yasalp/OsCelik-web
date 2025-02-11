import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../../assets/images/logo.png";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
