import styles from './trait.module.css';

function Trait({ number, name, content }) {
  return (
    <div className={styles.trait}>
      <h3 className={styles.h3}>
        {number}. {name}.
      </h3>
      <span>"{content}"</span>
    </div>
  );
}

export default Trait;
