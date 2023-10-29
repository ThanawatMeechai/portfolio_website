import React, { useRef } from "react";
import "./home.css";
import ima from "../../assets/img/stdempimg.png";
// import { Scrollbar } from "react-scrollbars-custom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import reactAnimation from "../../assets/img/Animation - 1698564135757.json";

// type Props = {};

const Home: React.FC = () => {
  // const lottieRef = useRef();
  // const interactivity = {
  //   mode: "scroll",
  //   actions: [
  //     {
  //       visibility: [0, 0.2],
  //       type: "stop",
  //       frames: [0],
  //     },
  //     {
  //       visibility: [0.2, 0.45],
  //       type: "seek",
  //       frames: [0, 45],
  //     },
  //     {
  //       visibility: [0.45, 1.0],
  //       type: "loop",
  //       frames: [45, 60],
  //     },
  //   ],
  // };
  function updateElementWidth() {
    const viewportWidth: number = window.innerWidth - 5.7;

    const navElement = document.querySelector(
      ".comtainerH"
    ) as HTMLElement | null;
    if (navElement) {
      navElement.style.width = viewportWidth + "px";
    }
  }

  // เรียกใช้งานฟังก์ชันเมื่อโหลดหน้าหรือมีการเปลี่ยนขนาดหน้าจอ
  window.addEventListener("load", updateElementWidth);
  window.addEventListener("resize", updateElementWidth);

  
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="comtainerH">
        <div className="image">
          <div className="Textleft-about">
            <img
              src={ima}
              alt="Thanawat Meechai"
              style={{
                height: "200px",
              }}
            />
            <span>Thanawat Meechai</span>
            <span>Full Stack</span>
            <button type="button">About me</button>
          </div>
          <div className="Contentleft"></div>
        </div>
        <h2>Skill </h2>
        <div style={{ width: "1000px", display: "flex" }}>
        <Lottie
  animationData={reactAnimation}

  speed={-0.1}  // กำหนดความเร็วให้ช้าลง
/>
          <Lottie animationData={reactAnimation} />
          <Lottie animationData={reactAnimation} />
          <Lottie animationData={reactAnimation} />
        </div>
      </div>
    </motion.div>
  );
};
export default Home;
