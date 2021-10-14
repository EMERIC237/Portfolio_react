import "./intro.scss";
import { init } from "ityped";
import React, { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software", "Devops"],
    });
  }, []);
  return (
    <div className="intro" style={{ backgroundImage: "url(/images/backgrounds/anas-alshanti-feXpdV001o4-unsplash.jpg)"}} id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="images/1.png" alt="a man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Emeric Touolac</h1>
          <h3>
          <span ref={textRef}></span> Engineer 
          </h3>
        </div>
        <a href="#portfolio">
          <img src="images/arrow.png" alt="down" />
        </a>
      </div>
    </div>
  );
}
