import React from "react";

type Props = {};

export const Performance = (props: Props) => {
  function updateElementWidth() {
    const viewportWidth = window.innerWidth - 5.7;

    document.querySelector(".container").style.width = viewportWidth + "px";
  }

  // เรียกใช้งานฟังก์ชันเมื่อโหลดหน้าหรือมีการเปลี่ยนขนาดหน้าจอ
  window.addEventListener("load", updateElementWidth);
  window.addEventListener("resize", updateElementWidth);
  return (
    <div
      className="container"
      style={{ marginTop: 50, backgroundColor: "white", color: "black" }}
    >
      Performance
    </div>
  );
};
