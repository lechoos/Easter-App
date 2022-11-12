import { useContext } from 'react';
import ReducerContext from '../../../context/reducerContext';
import Page from '../../../Containers/Page/Page';
import image0 from '../../../assets/img/EasterEve/easter-eve.jpg';
import image1 from '../../../assets/img/EasterEve/easter-eve-1.jpg';
import image2 from '../../../assets/img/EasterEve/easter-eve-2.jpg';

const EasterEve = () => {
	const { state } = useContext(ReducerContext);

	const monthNumber = (
		state.day - 1 === 0 
			? state.month - 1 
			: state.month
	);

	const month = monthNumber === 4 ? 'kwietnia' : 'marca';

	const sentences = [
		'Wielka Sobota to dzień zadumy, żałoby po śmierci Jezusa.',
		'W tym dniu święci się pokarmy, ale nie odprawia się Mszy Świętej.',
	];
	const lastSentence = `W ${state.year} Wielka Sobota wypada ${state.day - 1} ${month}.`;

	return (
		<Page
			title='Wielka Sobota'
			images={[image0, image1, image2]}
			alt='Zdjęcie z Wielkiej Soboty'
			sentences={sentences}
			lastSentence={lastSentence}
		/>
	);
};

export default EasterEve;
