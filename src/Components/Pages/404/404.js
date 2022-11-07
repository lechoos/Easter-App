import { Link } from "react-router-dom";
import styles from './404.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h2>404</h2>
      <p>Nie ma takiej strony</p>
      <Link className={styles.link} to='/'>
        Wróć do strony głównej
      </Link>
    </div>
  )
}

export default NotFound;