import React from "react";
import "./home.css";
import ima from "../../assets/img/stdempimg.png";
import { Scrollbar } from "react-scrollbars-custom";

type Props = {};

export default function Home({}: Props) {
  function updateElementWidth() {
    const viewportWidth = window.innerWidth - 5.7;

    document.querySelector(".comtainerH").style.width = viewportWidth + "px";
  }

  // เรียกใช้งานฟังก์ชันเมื่อโหลดหน้าหรือมีการเปลี่ยนขนาดหน้าจอ
  window.addEventListener("load", updateElementWidth);
  window.addEventListener("resize", updateElementWidth);
  return (
    <div className="comtainerH">
      <div className="image">
        <div className="Textleft-about">
          <img
            src={ima}
            style={{
              height: "200px",
            }}
          />
          <span>Thanawat Meechai</span>
          <span>Full Stack</span>
          <button>About me</button>
        </div>
        <div className="Contentleft"></div>
      </div>
      <div className="image">
        <div className="Textleft-about">
          <img
            src={ima}
            style={{
              height: "200px",
            }}
          />
          <span>Thanawat Meechai</span>
          <span>Full Stack</span>
          <button>About me</button>
        </div>
        <div className="Contentleft"></div>
      </div>
    </div>
  );
}
