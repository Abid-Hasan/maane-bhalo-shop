import { NavLink } from "react-router-dom";
import logo from "../../images/maane-bhalo-logo-hq.png";
import "./Header.css";

const Header = ({ handleSearch }) => {
  let activeClassName = "active-nav";
  return (
    <>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="sticky-top">
        <nav className="navbar">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            to="/"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            to="order-review"
          >
            Order Review
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            to="inventory"
          >
            Inventory
          </NavLink>
        </nav>
        <div className="search-container">
          <input
            onChange={handleSearch}
            className="search-box"
            type="text"
            name=""
            id=""
            placeholder="Type here to search"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
