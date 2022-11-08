import styles from './FooterLink.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterLink = (props) => {
	return (
		<a target='_blank' rel='noreferrer' dataid={props.dataId} href={props.link}>
			<FontAwesomeIcon className={styles.icon} icon={props.linkIcon} />
		</a>
	);
};

export default FooterLink;
