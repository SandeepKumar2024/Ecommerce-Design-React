import css from "./Hero.module.css";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import centerLogo from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className={css.conatiner}>
      <div className={css.h_left}>
        <span className={css.text1}>SKIN PROTECTION CREAM</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
      </div>
      {/* center */}
      <div className={css.center}>
        <div className={css.circle}></div>
        <img src={centerLogo} alt="" width={600} />
        <div className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      {/* Right */}

      <div className={css.h_left}>
        <div className={css.traffic}>
            <span>1.5m</span>
            <span>Monthly traffic</span>
            
        </div>
        <div className={css.customer}>
            <span>100k</span>
            <span>Happy Customers</span>

        </div>
      </div>

    </div>
  );
};

export default Hero;
