import styles from './Menu.module.css';
import withClass from '../../hoc/withClass';

const Menu = props => {
  return (
    <nav className={styles.menu}>
      <div className={styles.menuItems}>
        <div className={styles.menuLinks}>
          <a className={styles.link}>Home</a>
          <a className={styles.link}>Kal. Gregoriański</a>
          <a className={styles.link}>Kal. Juliański</a>
        </div>
        <button className={styles.menuBtn}></button>
      </div>
    </nav>
  )
}

export default withClass(Menu, 'wrapper');