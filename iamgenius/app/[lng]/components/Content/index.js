import styles from './content.module.css';

export const Content = async ({ children }) => {
  return <article className={styles.content}>{children}</article>;
};
