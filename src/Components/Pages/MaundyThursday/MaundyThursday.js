import { useContext } from 'react';
import ReducerContext from '../../../context/reducerContext';
import Page from '../../../Containers/Page/Page';
import image0 from '../../../assets/img/MaundyThursday/maundy-thursday.jpg';
import image1 from '../../../assets/img/MaundyThursday/maundy-thursday-1.jpg';
import image2 from '../../../assets/img/MaundyThursday/maundy-thursday-2.jpg';

const MaundyThursday = (props) => {
	const { state } = useContext(ReducerContext);

	const monthNumber = (
		state.day - 3 <= 0 
			? state.month - 1 
			: state.month
	);

	const month = monthNumber === 4 ? 'kwietnia' : 'marca';

	const sentences = [
		'Wielki Czwartek to wspomnienie ustanowienia Eucharystii i Kapłaństwa.',
		'Tego dnia Jezus spożył Ostatnią Wieczerzę ze swoimi uczniami. Tego dnia rano sprawuje się Mszę Krzyżma w kościołach katedralnych, zaś wieczorem Mszę Wieczerzy Pańskiej.'
	];
	const lastSentence = `W ${state.year} roku Wielki Czwartek wypada ${state.day - 3} ${month}.`;

	return (
		<Page
			title='Wielki Czwartek'
			images={[image0, image1, image2]}
			alt='Zdjęcie z Wielkiego Czwartku'
			sentences={sentences}
			lastSentence={lastSentence}
		/>
	);
};

export default MaundyThursday;
