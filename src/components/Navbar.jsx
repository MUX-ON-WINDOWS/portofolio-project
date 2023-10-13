import { Routes, Route, NavLink } from "react-router-dom";
import Leeruitkomsten from "../pages/Leeruitkomsten";
import Home from "../pages/Home";
import Spaceweek from "../content/Spaceweek";
import CRUD from "../content/CRUD";
import Sprint1 from "../content/Sprint1";
import Sprint2 from "../content/Sprint2";
import Sprint3 from "../content/Sprint3";

function Navbar() {
    function openHamburger() {
        const hamburger = document.querySelector('.hamburgerMenu');
        const hamburgerContent = document.querySelector('.hamburgerContent');
        if (hamburger.classList.contains('open')) {
            hamburger.classList.remove('open');
            hamburgerContent.classList.remove('open');
        } else {
            hamburger.classList.add('open');
            hamburgerContent.classList.add('open');
        }
    }
  return (
    <>
      <div className="navContainer">
        <div className="hamburgerMenu" onClick={openHamburger}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <NavLink className="navItem" to="/">Home</NavLink>
        <NavLink className="navItem" to="/leeruitkomsten">Leeruitkomsten</NavLink>
      </div>
      <div className="hamburgerContent">
        <div className="navHamContainer">
          <NavLink className="navItemHamburger" to="/">Home</NavLink>
          <NavLink className="navItemHamburger" to="/leeruitkomsten">Leeruitkomsten</NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leeruitkomsten" element={<Leeruitkomsten />} />
        <Route path="/spaceweek" element={<Spaceweek />} />
        <Route path="/CRUD" element={<CRUD />} />
        <Route path="/Discover" element={<Sprint1 />} />
        <Route path="/Define" element={<Sprint2 />} />
        <Route path="/Develop" element={<Sprint3 />} />
      </Routes>
    </>
  )
}
export default Navbar;
