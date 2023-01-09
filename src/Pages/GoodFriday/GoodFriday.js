import { useContext } from 'react';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import ReducerContext from '../../context/reducerContext';
import Page from '../../Components/Page/Page';
import image0 from '../../assets/img/GoodFriday/good-friday.jpg';
import image1 from '../../assets/img/GoodFriday/good-friday-1.jpg';
import image2 from '../../assets/img/GoodFriday/good-friday-2.jpg';

const GoodFriday = () => {
	useWebsiteTitle('Easter App - Wielki Piątek');
	const { state } = useContext(ReducerContext);

	const monthNumber = (
		state.day - 2 <= 0 
			? state.month - 1 
			: state.month
	);

	const month = monthNumber === 4 ? 'kwietnia' : 'marca';

	let dayNumber;

	switch (state.day - 2) {
		case 0 :
			dayNumber = 31;
			break;
		case -1 :
			dayNumber = 30;
			break;
		default :
			dayNumber = state.day - 2;
	}

	const sentences = [
		'Wielki Piątek to dzień smutku, postu, w którym szczególnie czci się krzyż.',
		'Wielki Piątek jest dniem śmierci Jezusa na krzyżu. W tym dniu nie sprawuje się Mszy Świętej, a jedynie żałobną Liturgię Męki Pańskiej.',
		'Kapłan ubrany w szaty koloru czerwonego rozpoczyna Liturgię od leżenia krzyżem. W trakcie Liturgii odczytywana jest Męka Pańska wg św. Jana, odsłaniany jest również zasłonięty od 5 niedzieli Wielkiego Postu krzyż.',
		'W tym dniu obowiązuje post ścisły.',
		`W ${state.year} roku Wielki Piątek wypada ${dayNumber} ${month}.`
	];

	return (
		<Page
			title='Wielki Piątek'
			images={[image0, image1, image2]}
			alt='Zdjęcie z Wielkiego Piątku'
			sentences={sentences}
		/>
	);
};

export default GoodFriday;
