import { useState, useRef, useEffect } from 'react';
import styles from './InputModal.module.css';

const InputModal = props => {
  const [year, setYear] = useState(2022);
  const inputRef = useRef();
  const calculate = () => {
    if (year >= 33 && year < 3000) {
      console.log(year);
    }
  }

  const onKeyDownHandler = e => {
    if (e.key === 'Enter') {
      calculate();
    }
  }

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <div className={styles.modal}>
      <h2>Podaj rok</h2>
      <input
        ref={inputRef}
        value={year}
        onChange={e => setYear(parseInt(e.target.value))}
        onKeyDown={onKeyDownHandler}
        type='number'
        placeholder='Rok...'
      />
      <button onClick={calculate}>Oblicz</button>
    </div>
  )
}

export default InputModal;