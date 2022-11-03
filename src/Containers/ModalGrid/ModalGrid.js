import styles from './ModalGrid.module.css';

const ModalGrid = props => {
  return (
    <div className={styles.modalGrid}>
      <div className='first-cell'>
        {props.easter}
      </div>
      <div className='second-cell'>
        {props.easterEve}
      </div>
      <div className='third-cell'>
        {props.goodFriday}
      </div>
      <div className='fourth-cell'>
        {props.maundyThursday}
      </div>
    </div>
  )
}

export default ModalGrid;