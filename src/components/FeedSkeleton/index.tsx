import styles from './FeedSkeleton.module.scss';

export const FeedSkeleton = () => {
  return (
    <div className={styles.feedSkeleton}>
      <div className={styles.feedSkeleton__controls}>
        <div className={styles.feedSkeleton__chip}></div>
        <div className={styles.feedSkeleton__chip}></div>
      </div>

      {Array.from({ length: 3 }).map((_, index) => (
        <article key={index} className={styles.feedSkeleton__card}>
          <div className={styles.feedSkeleton__header}>
            <div className={styles.feedSkeleton__title}></div>
            <div className={styles.feedSkeleton__icon}></div>
          </div>

          <div className={styles.feedSkeleton__body}>
            <div className={styles.feedSkeleton__line}></div>
            <div className={styles.feedSkeleton__line}></div>
            <div className={styles.feedSkeleton__lineShort}></div>
          </div>

          <div className={styles.feedSkeleton__footer}>
            <div className={styles.feedSkeleton__meta}></div>
            <div className={styles.feedSkeleton__meta}></div>
          </div>
        </article>
      ))}
    </div>
  );
};
