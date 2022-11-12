import ColorButton from '../../Components/ColorButton/ColorButton';
import styles from './Header.module.css';

const Header = (props) => {
	return (
		<header className={styles.header}>
			<h1>Easter App</h1>
			<ColorButton />
			<div className={styles.shadow}></div>
		</header>
	);
};

export default Header;
