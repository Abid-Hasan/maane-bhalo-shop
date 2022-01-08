import logo from "../../images/maane-bhalo-logo-hq.png";
import "./Header.css";

const Header = ({handleSearch}) => {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="sticky-top">
        <nav className="navbar">
          <a href="/shop">Shop</a>
          <a href="/order-review">Order Review</a>
          <a href="/inventory">Inventory</a>
        </nav>
        <div className="search-container">
          <input onChange={handleSearch} className="search-box" type="text" name="" id="" placeholder="Type here to search" />
        </div>
      </div>
    </>
  );
};

export default Header;
