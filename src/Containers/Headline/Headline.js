import { useContext } from "react";
import ReducerContext from "../../context/reducerContext";

const Headline = () => {
  const { state } = useContext(ReducerContext);

  return (
    <h3>W {state.year}:</h3>
  )
}

export default Headline;