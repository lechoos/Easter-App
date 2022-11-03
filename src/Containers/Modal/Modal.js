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

  return (
    <div
      style={modalStyles}
      className={styles.modal}>
      <h3 className={styles.heading}>{props.name}</h3>
      <p className={styles.date}>17 kwietnia</p>
      <a style={linkStyles} className={styles.link} href='https://pl.wikipedia.org/wiki/Wielkanoc'>Zobacz więcej...</a>
    </div>
  )
}

export default Modal;