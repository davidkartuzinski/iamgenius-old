import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <a href='https://iamgenius.io'>iamgenius.io</a>
          <span> Coming Soon!</span>
        </p>
        <div>
          <a
            href='https://github.com/davidkartuzinski/iamgenius'
            target='_blank'
            rel='noopener noreferrer'
          >
            By David Kartuzinski
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1>I am Genius</h1>
      </div>

      <div className={styles.grid}></div>
    </main>
  );
}
