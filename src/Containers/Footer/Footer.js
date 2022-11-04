import FooterLink from './FooterLink/FooterLink';
import styles from './Footer.module.css';
import {
	faFacebook,
	faSpotify,
	faLinkedin,
	faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <p>Autor: <a className={styles.link} href="">Piotr Lechowicz</a></p>
      <div>
        <FooterLink link='https://google.com' linkIcon={faFacebook} />
        <FooterLink link='https://mmcschool.pl' linkIcon={faSpotify} />
        <FooterLink linkIcon={faLinkedin} />
        <FooterLink linkIcon={faGithub} />
      </div>
    </footer>
  )
}

export default Footer;