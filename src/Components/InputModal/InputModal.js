import { useState, useRef, useEffect, useContext } from 'react';
import styles from './InputModal.module.css';
import { calculateDate, date } from '../../easterDate';
import ReducerContext from '../../context/reducerContext';

const InputModal = () => {
	const { state, dispatch } = useContext(ReducerContext);

	const [year, setYear] = useState(state.year);
	const inputRef = useRef();
	const calculate = () => {
		if (year >= 33 && year < 3000) {
			calculateDate(parseInt(year));
			dispatch({ type: 'change-date', date });
			dispatch({ type: 'change-year', year });
		}
	};

	const onKeyDownHandler = (e) => {
		if (e.key === 'Enter') {
			calculate();
		}
	};

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
					onChange={(e) => setYear(e.target.value)}
					onKeyDown={onKeyDownHandler}
					type='number'
					placeholder='Rok...'
					className={styles.input}
				/>
				<button className={styles.button} onClick={calculate}>
					Oblicz
				</button>
			</div>
		</div>
	);
};

export default InputModal;
