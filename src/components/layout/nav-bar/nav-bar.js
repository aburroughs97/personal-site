import { useHistory, useLocation } from "react-router-dom";

const items = [
  ["Home", "/"],
  ["Cooking", "/cooking"],
  ["Gallery", "/gallery"],
  ["Projects", "/projects"],
  ["Blog", "/blog"],
];

const NavBar = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="nav-bar">
      <div className="nav-bar--title">
        <h2>Alex Burroughs</h2>
        <p>Christian Developer, Photographer, and Chef</p>
      </div>
      <div className="nav-bar--items">
        {items.map(([text, path]) => (
          <div
            className={`nav-bar--item ${
              location.pathname === path && "active"
            }`}
            onClick={() => history.push(path)}
          >
            <h3>{text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
