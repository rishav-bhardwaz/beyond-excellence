import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({ megaphoneSimple, getOnlineCertificates }) => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <button className={styles.loremIpsumPlaceholderText}>
        <div className={styles.fAQSection} />
        <img
          className={styles.megaphonesimpleIcon}
          alt=""
          src={megaphoneSimple}
        />
      </button>
      <div className={styles.fAQAnswer}>
        <b className={styles.getOnlineCertificates}>{getOnlineCertificates}</b>
        <div className={styles.loremIpsumDolar}>
          Lorem Ipsum Dolar Sit Amet Lorem Ipsum Dolar Sit Amet!
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
