import { Link } from 'react-router-dom';
import styles from './Page.module.css';
import withClass from '../../hoc/withClass';

const Page = (props) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.header}>{props.title}</h2>
			<img
				className={styles.image}
				src={props.images[Math.floor(Math.random() * 2.99)]}
				alt={props.alt}
			/>
			<div className={styles.sentences}>
				<p className={styles.sentence}>{props.firstSentence}</p>
				<p className={styles.sentence}>{props.secondSentence}</p>
				<p className={styles.sentence}>{props.thirdSentence}</p>
			</div>
			<Link className={styles.link} to='/'>
				Powrót
			</Link>
		</div>
	);
};

export default withClass(Page, 'wrapper');
