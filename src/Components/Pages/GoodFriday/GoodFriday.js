import { useContext } from 'react';
import ReducerContext from '../../../context/reducerContext';
import Page from '../../../Containers/Page/Page';
import image0 from '../../../assets/img/GoodFriday/good-friday.jpg';
import image1 from '../../../assets/img/GoodFriday/good-friday-1.jpg';
import image2 from '../../../assets/img/GoodFriday/good-friday-2.jpg';

const GoodFriday = () => {
	const { state } = useContext(ReducerContext);

	const monthNumber = (
		state.day - 2 <= 0 
			? state.month - 1 
			: state.month
	);

	const month = monthNumber === 4 ? 'kwietnia' : 'marca';

	const sentences = [
		'Wielki Piątek to dzień smutku, postu, w którym szczególnie czci się krzyż.',
		'Wielki Piątek jest dniem śmierci Jezusa na krzyżu. W tym dniu nie sprawuje się Mszy Świętej, a jedynie żałobną Liturgię Męki Pańskiej.',
	];

	const lastSentence = `W ${state.year} roku Wielki Piątek wypada ${state.day - 2} ${month}.`;

	return (
		<Page
			title='Wielki Piątek'
			images={[image0, image1, image2]}
			alt='Zdjęcie z Wielkiego Piątku'
			sentences={sentences}
			lastSentence={lastSentence}
		/>
	);
};

export default GoodFriday;
