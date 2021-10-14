import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Software developer
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>
              <a href="tel:+1-240-877-5547">+1 240 877 5547</a>
            </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>
              <a href="mailto:bestvemeric@gmail.com" target="_blank" rel="noreferrer">
                {" "}
                bestvemeric@gmail.com
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="RSide" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
