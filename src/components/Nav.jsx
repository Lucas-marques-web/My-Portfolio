import { Link } from "react-router-dom";
function Nav(){
    return(
        <nav className="routes-css">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
        </nav>
    )
}

export default Nav;