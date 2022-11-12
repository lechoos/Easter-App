import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import styles from './ColorButton.module.css';

const ColorButton = () => {
  return (
    <button className={styles.colorBtn}><FontAwesomeIcon icon={faPalette} /></button>
  )
}

export default ColorButton;