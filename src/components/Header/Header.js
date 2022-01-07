import logo from "../../images/maane-bhalo-logo-hq.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav className="navbar">
        <a href="/shop">Shop</a>
        <a href="/order-review">Order Review</a>
        <a href="/inventory">Inventory</a>
      </nav>
    </>
  );
};

export default Header;
