import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Easter App</h1>
      <div className={styles.shadow}></div>
    </div>
  )
};

export default Header;