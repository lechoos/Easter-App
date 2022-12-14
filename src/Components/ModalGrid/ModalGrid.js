import withClass from '../../hoc/withClass';
import styles from './ModalGrid.module.css';

const ModalGrid = (props) => {
	return (
		<div 
			ref={props.innerRef}
			className={styles.modalGrid}
		>
			<div className='first-cell'>{props.easter}</div>
			<div className='second-cell'>{props.easterEve}</div>
			<div className='third-cell'>{props.goodFriday}</div>
			<div className='fourth-cell'>{props.maundyThursday}</div>
		</div>
	);
};

export default withClass(ModalGrid, 'wrapper');
