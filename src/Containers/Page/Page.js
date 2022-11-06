import { Link } from 'react-router-dom';
import styles from './Page.module.css';
import withClass from '../../hoc/withClass';

const Page = props => {
  return (
    <div>
      <h2 className={styles.header}>{props.title}</h2>
      <img src={props.src} alt={props.alt} />
      <div className={styles.sentences}>
        <p className={styles.sentence}>{props.firstSentence}</p>
        <p className={styles.sentence}>{props.secondSentence}</p>
        <p className={styles.sentence}>{props.thirdSentence}</p>
      </div>
      <Link to='/'>Powrót</Link>
    </div>
  )
}

export default withClass(Page, 'wrapper');