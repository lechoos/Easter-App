import { useContext } from 'react';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import ReducerContext from '../../context/reducerContext';
import Page from '../../Components/Page/Page';
import image0 from '../../assets/img/EasterEve/easter-eve.jpg';
import image1 from '../../assets/img/EasterEve/easter-eve-1.jpg';
import image2 from '../../assets/img/EasterEve/easter-eve-2.jpg';

const EasterEve = () => {
	useWebsiteTitle('Easter App - Wielka Sobota');
	const { state } = useContext(ReducerContext);

	const monthNumber = (
		state.day - 1 === 0 
			? state.month - 1 
			: state.month
	);

	const dayNumber = (
		state.day - 1 === 0 
			? 31 
			: state.day - 1
	)

	const month = monthNumber === 4 ? 'kwietnia' : 'marca';

	const sentences = [
		'Wielka Sobota to dzień zadumy, żałoby po śmierci Jezusa.',
		'W tym dniu święci się pokarmy, ale nie odprawia się Mszy Świętej.',
		'Po zmroku sprawowana jest najważniejsza Liturgia w ciągu roku - Liturgia Wigilii Paschalnej, lecz należy ona już do uroczystości Zmartwychwstania Pańskiego.',
		`W ${state.year} Wielka Sobota wypada ${dayNumber} ${month}.`
	];

	return (
		<Page
			title='Wielka Sobota'
			images={[image0, image1, image2]}
			alt='Zdjęcie z Wielkiej Soboty'
			sentences={sentences}
		/>
	);
};

export default EasterEve;
