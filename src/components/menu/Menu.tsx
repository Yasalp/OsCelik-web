import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <nav>
      <div>
        <a href="/">
          <span>Ana Sayfa</span>
        </a>
      </div>
      <div>
        <a href="/project">
          <span>Projeler</span>
        </a>
      </div>
      <div>
        <a href="/Contact">
          <span>İletişim</span>
        </a>
      </div>
    </nav>
  );
};

export default Menu;
