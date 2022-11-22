import { useContext, useRef } from 'react';
import InputModal from '../../InputModal/InputModal';
import Modal from '../../../Containers/Modal/Modal';
import ModalGrid from '../../../Containers/ModalGrid/ModalGrid';
import ReducerContext from '../../../context/reducerContext';
import Headline from '../../../Containers/Headline/Headline';

const Home = () => {
	let thursdayDay, fridayDay, eveDay;

	const { state } = useContext(ReducerContext);
	const gridRef = useRef();

	const scrollToGrid = () => window.scrollTo({ behavior: 'smooth', top: gridRef.current.offsetTop })

	switch (state.day - 3) {
		case 0:
			thursdayDay = 31;
			fridayDay = state.day - 2;
			eveDay = state.day - 1;
			break;
		case -1:
			thursdayDay = 30;
			fridayDay = 31;
			eveDay = state.day - 1;
			break;
		case -2:
			thursdayDay = 29;
			fridayDay = 30;
			eveDay = 31;
			break;
		default:
			thursdayDay = state.day - 3;
			fridayDay = state.day - 2;
			eveDay = state.day - 1;
	}

	const easter = (
		<Modal
			id='wielkanoc'
			day={state.day}
			month={state.month}
			name='Wielkanoc'
			modalBackground='#b69029'
			linkBackground='#e0bc5a'
		/>
	);

	const easterEve = (
		<Modal
			id='wielka-sobota'
			day={eveDay}
			month={state.day - 1 === 0 ? state.month - 1 : state.month}
			name='Wielka Sobota'
			modalBackground='#3e174e'
			linkBackground='#793096'
		/>
	);
	const goodFriday = (
		<Modal
			id='wielki-piatek'
			day={fridayDay}
			month={state.day - 2 <= 0 ? state.month - 1 : state.month}
			name='Wielki Piątek'
			modalBackground='#901717'
			linkBackground='#c93636'
		/>
	);
	const maundyThursday = (
		<Modal
			id='wielki-czwartek'
			day={thursdayDay}
			month={state.day - 3 <= 0 ? state.month - 1 : state.month}
			name='Wielki Czwartek'
			modalColor='#000'
			modalBackground='#eeedc1'
			linkColor='#000'
			linkBackground='#d1d1d1'
		/>
	);

	return (
		<>
			<InputModal
				scrollHandler={scrollToGrid}
			/>
			<Headline year={state.year} />
			<ModalGrid
				innerRef={gridRef}
				easter={easter}
				easterEve={easterEve}
				goodFriday={goodFriday}
				maundyThursday={maundyThursday}
			/>
		</>
	);
};

export default Home;
