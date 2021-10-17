import React, { useState, useEffect } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("web");
  const [text, setText] = useState({ display: "none" });
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  const list = [
    {
      id: "web",
      title: "Web App",
    },
  ];
  return (
    <div
      className="portfolio"
      style={{ backgroundImage: "url(/images/backgrounds/portfolio-bg.jpeg)" }}
      id="portfolio"
    >
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, index) => (
          <div key={index} className="item">
            <img src={d.image} alt="app" />
            <h3>
              <a
                href={d.link}
                target="_blank"
                rel="noreferrer noopener"
                onMouseEnter={(e) => {
                  setText({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setText({ display: "none" });
                }}
              >
                {d.title}
              </a>
              <span style={text}>Click to see the project</span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
