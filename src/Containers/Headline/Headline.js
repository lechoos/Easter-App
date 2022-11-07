import { useContext } from "react";
import ReducerContext from "../../context/reducerContext";
import styles from './Headline.module.css';

const Headline = () => {
  const { state } = useContext(ReducerContext);

  return (
    <h3 className={styles.header}>W roku {state.year}:</h3>
  )
}

export default Headline;