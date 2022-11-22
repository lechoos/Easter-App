import { useState, useRef, useEffect, useContext } from 'react';
import styles from './InputModal.module.css';
import { calculateDate, date } from '../../easterDate';
import ReducerContext from '../../context/reducerContext';

const InputModal = (props) => {
	const { state, dispatch } = useContext(ReducerContext);
	const [year, setYear] = useState(state.year);
	const [error, setError] = useState();

	const inputRef = useRef();
	const calculate = () => {
		if (year >= 33 && year <= 2999) {
			calculateDate(parseInt(year));
			dispatch({ type: 'change-date', date });
			dispatch({ type: 'change-year', year });
			setError('');
			props.scrollHandler();
		} else if (year === ''){
			setError('Musisz podać rok!');
		} else if (year < 33) {
			setError('Rok musi być większy od 32!');
		} else if (year > 2999) {
			setError('Rok musi być mniejszy od 3000!');
		}
	};

	const onKeyDownHandler = (e) => {
		if (e.key === 'Enter' && year >= 1) {
			calculate();
		}
	};

	const onChangeHandler = (e) => {
		if (!year && e.target.value === '0') return;

		if (e.target.value < 0) {
			setError('Rok nie może być mniejszy niż 0!');
		} else {
			setError('');
		};

		setYear(e.target.value);
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
