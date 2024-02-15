import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <Link style={{ color: "lightskyblue", textDecoration: "none" }} to="/">
          <p>Lessons:</p>
        </Link>
        <div className="mainLink">
          <Link to="/typography">Typography</Link>
          <Link to="/button">Button</Link>
        </div>
      </div>
    </div>
  );
};
