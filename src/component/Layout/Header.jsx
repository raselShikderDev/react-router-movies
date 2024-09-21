/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import logo from "../../assets/rasel_color_logo.png";
export default function Header() {
  return (
    <header>
      <div className="bg-gray-700">
        <div
          style={{ width: "90%", margin: "auto" }}
          id="container"
          className=""
        >
          <div
            id="topheader"
            className="flex  text-white justify-between items-center  py-3"
          >
            <div id="leftSide">
              <p>Welcome to Rasel's Website</p>
            </div>
            <div id="RightSide">
              <button className="text-sky-400 mr-3 py-2">SignIn</button>
              <button className="bg-sky-400 text-white py-1 px-3 rounded-md">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50">
        <div style={{ width: "90%", margin: "auto" }} id="container">
          <div
            id="HeaderNavBar"
            className="flex flex-wrap text-black justify-between items-center"
          >
            <div id="navLogo" className="w-2/12">
              <button to="#">
                <img className="object-contain" src={logo} alt="logo" />
              </button>
            </div>
            <div id="navbar" className="my-5">
              <ul className="flex w-1/4 items-center gap-2 ">
                <li>
                  <NavLink to="/" className="px-5 py-3 font-medium">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="px-5 py-3 font-medium">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/movie" className="px-5 py-3 font-medium">
                    Movie
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="px-5 py-3 font-medium">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
