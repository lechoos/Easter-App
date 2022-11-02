import styles from './Modal.module.css';

const Modal = props => {

  const modalStyles = {
    color: props.modalColor,
    backgroundColor: props.modalBackground,
  }

  return (
    <div
      style={modalStyles}
      className={styles.modal}>
      <h3 className={styles.heading}>{props.name}</h3>
      <p className={styles.date}>17 kwietnia</p>
      <a className={`${styles.link}`} href='https://pl.wikipedia.org/wiki/Wielkanoc'>Zobacz więcej...</a>
    </div>
  )
}

export default Modal;