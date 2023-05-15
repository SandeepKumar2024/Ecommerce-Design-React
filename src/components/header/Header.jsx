import css from "./Header.module.css";
import { CgShoppingBag } from "react-icons/cg";
import logo from '../../../src/assets/logo.png'

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="" />
        <span>Amazon Lite</span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Collection</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        </div>
        <input type="text" placeholder="Search..." className={css.serach} />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
