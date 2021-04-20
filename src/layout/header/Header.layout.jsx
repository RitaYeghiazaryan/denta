//Assets
import Frame from "src/assets/header/Frame.png";
import Tel from "src/assets/header/TeL.png";
import Facebook from "src/assets/header/Facebook.png";
import Twit from "src/assets/header/Twit.png";
import Instagram from "src/assets/header/Instagram.png";
//Styles
import styles from "./header.module.scss";
const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Frame} alt="Frame" className={styles.frame} />
      <div className={styles.cosmetology}>Cosmetology</div>
      <div className={styles.nav}>
        <div className={styles.item}>
          <img src={Tel} alt="Tel" />
          <span className={styles.tel}>(832) 123-45-67</span>
        </div>
        <div className={styles.item}>
          <span>905 S. Lake St. #102 Burbank, CA 91502</span>
        </div>
      
      </div>
      <div className={styles.contacts}>
          <img src={Facebook} alt="Facebook" />
          <img src={Twit} alt="Twit" />
          <img src={Instagram} alt="" />
        </div>
    </div>
  );
};
export default Header;
