import React, { useState } from "react";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {};

export default function NaV({}: Props) {
  const [menu, Setmenu] = useState(true);
  function updateElementWidth() {
    const viewportWidth = window.innerWidth - 5.7;
    if (viewportWidth > 1566 && menu == false) {
      Setmenu(true);
      console.log(menu);
    }
    document.querySelector(".nav").style.width = viewportWidth + "px";
  }

  // เรียกใช้งานฟังก์ชันเมื่อโหลดหน้าหรือมีการเปลี่ยนขนาดหน้าจอ
  window.addEventListener("load", updateElementWidth);
  window.addEventListener("resize", updateElementWidth);

  return (
    <div style={{ position: "relative" }}>
      <div
        id="menetab"
        style={{
          margin: "50px 0px 0px 0px",
          display: menu ? "none" : "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          right: 10,
          height: "500px",
          width: "200px",
          position: "absolute",
          backgroundColor: "#dac0a3",
        }}
      >
        <a style={{ color: "white" }} href="/html/">
          HTML
        </a>
        <a style={{ color: "white" }} href="/css/">
          CSS
        </a>
        <a style={{ color: "white" }} href="/js/">
          JavaScript
        </a>
        <a style={{ color: "white" }} href="/Performance">
          Performance
        </a>
      </div>
      <nav className="nav">
        <div
          style={{
            marginLeft: 30,
            color: "black",
            width: "150px",
            left: 10,
            alignSelf: "start",
          }}
        >
          <span>Portfolio Website</span>
          <span> Presentation</span>
        </div>
        <div className="content-nav">
          <a style={{ color: "black" }} href="/html/">
            HTML
          </a>{" "}
          |
          <a style={{ color: "black" }} href="/css/">
            CSS
          </a>{" "}
          |
          <a style={{ color: "black" }} href="/js/">
            JavaScript
          </a>{" "}
          |
          <a style={{ color: "black" }} href="/Performance">
            Performance
          </a>
        </div>
        <div className="buttonmenu">
          <button
            id="menubut"
            onClick={() => {
              Setmenu(!menu);
              console.log(menu);
            }}
            style={{
              backgroundColor: "transparent",
              color: "#e5d283",
              border: "none",
            }}
          >
            <MenuIcon style={{ backgroundColor: "transparent" }} />
          </button>
        </div>
      </nav>
    </div>
  );
}