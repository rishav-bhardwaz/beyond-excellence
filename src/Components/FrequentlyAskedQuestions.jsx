import GroupComponent1 from "./GroupComponent1";
import styles from "./FrequentlyAskedQuestions.module.css"

const FrequentlyAskedQuestions = () => {
  return (
    <div className={styles.frequentlyAskedQuestions}>
      <div className={styles.learnFromProfessionalsParent}>
        <div className={styles.learnFromProfessionals}>
          <h1 className={styles.ourValue}>Our Value</h1>
          <div className={styles.welcomeToBeyond}>
            Welcome to Beyond Excellence, your gateway to linguistic prowess and
            cultural immersion. We believe language learning is not just about
            memorizing words.....
          </div>
        </div>
        <div className={styles.subscribeToOurMailingListParent}>
          <h3 className={styles.subscribeToOur}>
            Subscribe to our mailing list and be the first to know when a new
            feature or product drops.
          </h3>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.yourEmail}></div>
            <button className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.getStarted}>Get Started</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <GroupComponent1
            megaphoneSimple="/megaphonesimple.svg"
            getOnlineCertificates="Get online certificates"
          />
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <div className={styles.fAQGroup}>
              <div className={styles.ellipseDecor} />
              <img
                className={styles.desktopIcon}
                loading="eager"
                alt=""
                src="/desktop.svg"
              />
            </div>
            <div className={styles.newCourses}>
              <b className={styles.findTheCourse}>
                Find the course that suites
              </b>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <GroupComponent1
            megaphoneSimple="/ticket.svg"
            getOnlineCertificates="Learn from Professionals "
          />
          <GroupComponent1
            megaphoneSimple="/gitpullrequest.svg"
            getOnlineCertificates="New Tasks every week"
          />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
