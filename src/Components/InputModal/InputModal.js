import { useState, useRef, useEffect, useContext } from 'react';
import styles from './InputModal.module.css';
import { calculateDate, date } from '../../easterDate';
import ReducerContext from '../../context/reducerContext';

const InputModal = () => {
	const { state, dispatch } = useContext(ReducerContext);
	const [year, setYear] = useState(state.year);
	const [error, setError] = useState();

	const inputRef = useRef();
	const calculate = () => {
		if (year >= 33 && year < 3000) {
			calculateDate(parseInt(year));
			dispatch({ type: 'change-date', date });
			dispatch({ type: 'change-year', year });
		} else if(year < 33) {
			setError('Rok musi być większy od 32!')
		} else if (year >= 3000) {
			setError('Rok musi być mniejszy od 3000!')
		}
	};

	const onKeyDownHandler = (e) => {
		if (e.key === 'Enter') {
			calculate();
		}
	};

	const onChangeHandler = (e) => {
		if (year === '' && e.target.value === '0') {
			return;
		}
		setYear(e.target.value)
	}

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<div className={styles.modal}>
			<div className={styles.modalItems}>
				<h2>Podaj rok</h2>
				<input
					ref={inputRef}
					value={year}
					onChange={onChangeHandler}
					onKeyDown={onKeyDownHandler}
					type='number'
					placeholder='Rok...'
					className={styles.input}
				/>
				{error ? <p className={styles.error}>{error}</p> : null}
				<button className={styles.button} onClick={calculate}>
					Oblicz
				</button>
			</div>
		</div>
	);
};

export default InputModal;
