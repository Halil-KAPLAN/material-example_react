import { Link } from "react-router-dom";
import routeList from "./helpers/routeList";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <Link style={{ color: "lightskyblue", textDecoration: "none" }} to="/">
          <p>Lessons:</p>
        </Link>
        <div className="mainLink">
          {routeList.map(
            ({ title, path }, i) =>
              title !== "Home" && (
                <Link to={path} key={i}>
                  {title}
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
