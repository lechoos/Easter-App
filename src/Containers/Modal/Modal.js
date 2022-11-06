import { Link } from 'react-router-dom';
import styles from './Modal.module.css';

const Modal = props => {

  const modalStyles = {
    color: props.modalColor || '#fff',
    backgroundColor: props.modalBackground,
  }

  const linkStyles = {
    color: props.linkColor || '#fff',
    backgroundColor: props.linkBackground
  }

  let month;

  switch (props.month) {
    case '3':
      month = 'marca'
      break;
    default:
      month = 'kwietnia'
  }

  return (
    <div
      style={modalStyles}
      className={styles.modal}>
      <h3 className={styles.heading}>{props.name}</h3>
      <p className={styles.date}>{props.day} {month}</p>
      <Link to={`${props.id}`} style={linkStyles} className={styles.link}>Zobacz więcej...</Link>
    </div>
  )
}

export default Modal;