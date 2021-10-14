import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  const sectionsWithId = {
    Home: "#intro",
    Portfolio: "#portfolio",
    Projects: "#projects",
    About: "#about",
    Contact: "#contact",
  };

  const navigationList = Object.entries(sectionsWithId).map((section) => (
    <li onClick={() => setMenuOpen(false)}>
      <a href={section[1]}>{section[0]}</a>
    </li>
  ));
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>{navigationList}</ul>
    </div>
  );
}
