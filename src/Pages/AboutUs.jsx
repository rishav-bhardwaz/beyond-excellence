import Navbar from "../Components/Navbar";
import FrameComponent from "../Components/FrameComponent";
import FrequentlyAskedQuestions from "../Components/FrequentlyAskedQuestions";
import styles from "./AboutUs.module.css";
import Footer from "../Sections/Footer";
const AboutUs = () => {
  return (
    <>
      <Navbar />

      <div className={styles.aboutUs3}>
        <FrameComponent />
        <section className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.unsplashucub9wxkpgyIcon}
                loading="eager"
                alt=""
                src="../../public/images/unsplashucub9wxkpgy@2x.png"
              />
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <img
                className={styles.unsplash5u6bz2tyhx8Icon}
                loading="eager"
                alt=""
                src="../../public/images/unsplash5u6bz2tyhx8@2x.png"
              />
            </div>
          </div>
          <FrequentlyAskedQuestions />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
