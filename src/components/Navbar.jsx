import { Routes, Route, NavLink } from "react-router-dom";
import Leeruitkomsten from "../pages/Leeruitkomsten";
import Home from "../pages/Home";

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
        <NavLink className="navItem" to="leeruitkomsten">Leeruitkomsten</NavLink>
      </div>
        <div className="hamburgerContent">
            <NavLink className="navItemHamburger" to="/">Home</NavLink>
            <NavLink className="navItemHamburger" to="leeruitkomsten">Leeruitkomsten</NavLink>
        </div>
      <Routes>
          <Route path='' element={<Home />} />
          <Route path="leeruitkomsten" element={<Leeruitkomsten />} />
      </Routes>
    </>
  )
}
export default Navbar;
