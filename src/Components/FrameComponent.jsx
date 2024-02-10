import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.whoWeAreAndWhatWeDoParent}>
        <h1 className={styles.whoWeAre}>Who we are and what we do</h1>
        <div className={styles.frameWrapper}>
          <div className={styles.welcomeToBeyondExcellenceParent}>
            <div className={styles.welcomeToBeyond}>
              Welcome to Beyond Excellence, your gateway to linguistic prowess
              and cultural immersion. We believe language learning isn't just
              about memorizing words; it's about unlocking a world of
              opportunity, understanding, and self-expression. Whether you're
              seeking career advancement, academic success, or simply a deeper
              connection with the world around you, Beyond Excellence has the
              perfect language journey waiting for you.
            </div>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.searchCourses}>Search Courses</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <img
            className={styles.dStudentGraduationCapOnBo}
            loading="eager"
            alt=""
            src="/3d-student-graduation-cap-on-books-stack@2x.png"
          />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <img
            className={styles.unsplasheesdjflfx1aIcon}
            loading="eager"
            alt=""
            src="/unsplasheesdjflfx1a@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
