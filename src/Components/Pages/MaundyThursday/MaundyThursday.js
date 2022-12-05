import { useContext } from 'react';
import useWebsiteTitle from '../../../hooks/useWebsiteTitle';
import ReducerContext from '../../../context/reducerContext';
import Page from '../../../Containers/Page/Page';
import image0 from '../../../assets/img/MaundyThursday/maundy-thursday.jpg';
import image1 from '../../../assets/img/MaundyThursday/maundy-thursday-1.jpg';
import image2 from '../../../assets/img/MaundyThursday/maundy-thursday-2.jpg';

const MaundyThursday = () => {
	useWebsiteTitle('Easter App - Wielki Czwartek');
	const { state } = useContext(ReducerContext);

	const monthNumber = (
		state.day - 3 <= 0 
			? state.month - 1 
			: state.month
	);

	const month = monthNumber === 4 ? 'kwietnia' : 'marca';

	let dayNumber;

	switch (state.day - 3) {
		case 0 :
			dayNumber = 31;
			break;
		case -1 :
			dayNumber = 30;
			break;
		case -2 :
			dayNumber = 29;
			break;
		default :
			dayNumber = state.day - 3;
	}

	const sentences = [
		'Wielki Czwartek to wspomnienie ustanowienia Eucharystii i Kapłaństwa.',
		'Tego dnia Jezus spożył Ostatnią Wieczerzę ze swoimi uczniami. Tego dnia rano sprawuje się Mszę Krzyżma w kościołach katedralnych, zaś wieczorem Mszę Wieczerzy Pańskiej.'
	];
	const lastSentence = `W ${state.year} roku Wielki Czwartek wypada ${dayNumber} ${month}.`;

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
