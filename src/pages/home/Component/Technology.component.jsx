//Assets
import DentalChair from "src/assets/home/dentalChair.png";
//Styles
import styles from "./technology.module.scss";
const Technology = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.subtitle}>Technology</h3>
        <h1 className={styles.title}>we use modern technologies</h1>
        <p className={styles.p}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <div className={styles.topLeft}>
          Modern
          <hr />
        </div>
        <div className={styles.topRight}>
          Safe
          <hr />
        </div>
        <div className={styles.bottomLeft}>
          Comfortable
          <hr />
        </div>
        <div className={styles.bottomRight}>
          Painless
          <hr />
        </div>
        <div class={styles.centered}>
          <img src={DentalChair} alt="" className={styles.img} />
        </div>
      </div>



    </div>
  );
};

export default Technology;
