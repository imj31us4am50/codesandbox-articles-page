import NavBarCSS from "/navbar/NavBar.css";
import React, { useState, useEffect } from "react";

export default function Nav() {
  return (
    <div className="navbar rowa" style={NavBarCSS}>
      <ul className="nav-list one rowa">
        <li className="nav-item">
          <a href="#inserthomelink" className="a">
            {/*<img src="https://imj31us4am50.github.io/imgs/home-icon.png" className="icon"/>*/}
            ACASĂ
          </a>
        </li>
        <li className="nav-item current">
          <a href="#insertarticleslink" className="a">
            ARTICOLE
          </a>
        </li>
        <li className="nav-item">
          <a href="#insertdonatelink" className="a">
            DONEAZĂ
          </a>
        </li>
      </ul>

      <ul className="nav-list two rowa">
        <li className="nav-item">
          <a href="#insertaboutlink" className="a">
            DESPRE
          </a>
        </li>
        <li className="nav-item bg">
          <a href="#insertmyacclink" className="a">
            CONTUL MEU
          </a>
        </li>
      </ul>
    </div>
  );
}
