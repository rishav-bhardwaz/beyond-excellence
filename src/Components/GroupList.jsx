import styles from "./GroupList.module.css";

const GroupList = () => {
  return (
    <div className={styles.groupList}>
      <button className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.loremIpsumDolar}>
          Lorem Ipsum Dolar Sit Amet Lorem Ipsum
        </div>
        <img className={styles.arrowrightIcon} alt="" src="/arrowright.svg" />
      </button>
      <button className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.loremIpsumDolar1}>
          Lorem Ipsum Dolar Sit Amet Lorem Ipsum
        </div>
        <img className={styles.arrowrightIcon1} alt="" src="/arrowright.svg" />
      </button>
    </div>
  );
};

export default GroupList;
