import React, { useEffect, useState } from "react";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";

// type Props = {};

const NaV: React.FC = () => {
  const [menu, Setmenu] = useState(true);
  // useEffect(() => {
  //   updateElementWidth();
  // }, [viewportWidth]);
  function updateElementWidth() {
    const viewportWidth = window.innerWidth - 5.7;

    if (viewportWidth > 1566 && !menu) {
      Setmenu(true); // Assuming Setmenu is a function to set the 'menu' variable
      console.log(menu);
    }

    // const navElement = document.querySelector(".nav") as HTMLElement | null;
    // if (navElement) {
    //   navElement.style.width = viewportWidth + "px";
    // }
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
        <a style={{ color: "white" }} href="/About/">
          HTML
        </a>
        <a style={{ color: "white" }} href="/css/">
          CSS
        </a>
        <a style={{ color: "white" }} href="/js/">
          JavaScript
        </a>
        <a style={{ color: "white" }} href="/python/">
          Performancesssss
        </a>
      </div>
      <nav className="nav">
        <a
          href="/"
          style={{
            marginLeft: 30,
            color: "white",fontWeight:"bold" ,
            width: "150px",
            left: 10,
            alignSelf: "start",
          }}
        >
          <span>Portfolio Website</span>
          <span>Presentation</span>
        </a>
        <div className="content-nav">
        <a style={{ color: "white",fontWeight:"bold" }}  href="/About">
            HTML
          </a>{" "}
          |
          <a style={{ color: "white",fontWeight:"bold" }}  href="/css/">
            Project
          </a>{" "}
          |
          <a style={{ color: "white",fontWeight:"bold" }}  href="/js/">
            JavaScript
          </a>{" "}
          |
          <a style={{ color: "white",fontWeight:"bold" }} href="/Performance">
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
};
export default NaV;
