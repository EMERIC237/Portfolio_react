import React, { useState } from "react";

import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://northwestrving.com/images/2020/January/app-cover.jpg"
            alt="app"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://northwestrving.com/images/2020/January/app-cover.jpg"
            alt="app"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://northwestrving.com/images/2020/January/app-cover.jpg"
            alt="app"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://northwestrving.com/images/2020/January/app-cover.jpg"
            alt="app"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://northwestrving.com/images/2020/January/app-cover.jpg"
            alt="app"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://northwestrving.com/images/2020/January/app-cover.jpg"
            alt="app"
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
