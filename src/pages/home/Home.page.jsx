//Assets
import Girl from "src/assets/home/homeGirl.png";
import image1 from "src/assets/home/section-3/image1.jpg"
import image2 from "src/assets/home/section-3/image2.jpg"
import image3 from "src/assets/home/section-3/image3.jpg"




//Styles
import styles from "./home.module.scss";


const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.section1}>
          <img src={Girl} alt="homeGir" className={styles.homeGirl} />

          <div className={styles.content}>
            <div className={styles.nav}>
              <div className={styles.item}>Our services</div>
              <div className={styles.item}>About us</div>
              <div className={styles.item}>Portflio</div>
              <div className={styles.item}>Blog </div>
              <div className={styles.item}> Contacts</div>
            </div>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>
                <div>
                  Take your <span className={styles.smile}>smile</span>
                </div>
                <div>to the new heights</div>
              </h1>
              <div className={styles.subtitle}>
                Providing a full range of professional dental services
              </div>
              <div className={styles.btn}>Appointment</div>
            </div>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.subtitle}>Technology</h3>
            <h1 className={styles.title}>we use modern technologies</h1>
            <p className={styles.p}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </div>
          {/* <img src={DentalChair} alt="" className={styles.img} /> */}

          {/* <div className={styles.imageWrapper}>
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
      
        </div>
      </div> */}
        </div>

        <div className={styles.section3}>  {/* container */}
         
          <div className={styles.section3A}>  {/* content */}
          <h3 className={styles.subtitle}> Services</h3>
            <div className={styles.section3ATitleWrapper}>
            
              <h1 className={styles.section3ATitle}>
                What We Offer For Our Patients To Solve Cure
              </h1>
              <p className={styles.section3AP}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since simply dummy text of the printing.
              </p>
              <p className={styles.section3AP}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since simply dummy text of the printing.
              </p>
            </div>
          </div>
          <div className={styles.section3B}>
            <div className={styles.section3BItem}>
              <img src={image1} alt="" className={styles.img}/>
            </div>
            <div className={styles.section3BItem}>
              <img src={image2} alt="" className={styles.img} />
            </div>
           < div className={styles.section3BItem}>
           <img src={image2} alt="" className={styles.img}/>
              
            </div>


          </div>
        </div>

        {/* <WhyWe /> */}
      </div>
    </div>
  );
};

export default Home;
