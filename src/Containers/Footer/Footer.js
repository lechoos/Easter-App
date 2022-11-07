import FooterLink from './FooterLink/FooterLink';
import styles from './Footer.module.css';
import {
	faFacebook,
	faSpotify,
	faLinkedin,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footerItems} wrapper`}>
				<p>Autor: <a target='_blank' rel='noreferrer' className={styles.link} href='https://github.com/lechoos'>Piotr Lechowicz</a>
				</p>
				<div className={styles.footerLinks}>
					<FooterLink 
            dataId='facebook' 
            link='https://www.facebook.com/piotrek.lech.2003/' 
            linkIcon={faFacebook} 
          />
					<FooterLink 
            dataId='spotify'
            link='https://open.spotify.com/user/bx7a7dxxkl1jzj1xnyn29ljww?si=ce81c4187d314aed' 
            linkIcon={faSpotify} 
          />
					<FooterLink
            dataId='linkedin'
            link='https://www.linkedin.com/in/piotr-lechowicz-a04201228/'
            linkIcon={faLinkedin} 
          />
					<FooterLink 
            dataId='github'
            link='https://github.com/lechoos/Easter-App'
            linkIcon={faGithub} 
          />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
