import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav>
          <div className="section-wrapper">
            <div className="left">
              <div className="logo">
                <Link to="/">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7QKDCDjS1mhc9Lx-gTCHVUR-0N2H30BV-M0chqMGxQ&s"
                    alt="logo"
                    width="40"
                    height="30"
                  />
                </Link>
              </div>
              <div className="spans">
                <Link to="/">
                <span className="span1">Africa</span>
                <span className="span2">Adventures</span>   
                </Link>
              </div>
            </div>
            <div className="mid">
              <ul className="list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/testimonies">Testimonies</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
              </ul>
            </div>

            <div className="right">
              <FaEnvelope style={{ color: "purple" }} />
              <button id="btn">
                <Link to="/contact">CONTACT US</Link>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
