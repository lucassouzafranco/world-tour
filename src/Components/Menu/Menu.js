import React from "react";
import './Menu.css';

const Menu = () => {
  return(
    <div className="menuContainer">
      <div className="upperRange"></div>
      <div className="menuArea">
        <div className="menuTitle">
          <h3>World Tour</h3>
        </div>
        <nav>
          <ul>
            <li>HOME</li>
            <li>SOBRE</li>
            <li>PATROCINIO</li>
            <li>CONTATO</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Menu