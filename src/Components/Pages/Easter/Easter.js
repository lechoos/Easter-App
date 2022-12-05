import { useContext } from 'react';
import useWebsiteTitle from '../../../hooks/useWebsiteTitle';
import ReducerContext from '../../../context/reducerContext';
import Page from '../../../Containers/Page/Page';
import image0 from '../../../assets/img/Easter/easter.jpg';
import image1 from '../../../assets/img/Easter/easter-1.jpg';
import image2 from '../../../assets/img/Easter/easter-2.jpg';

const Easter = () => {
	useWebsiteTitle('Easter App - Wielkanoc');
	const { state } = useContext(ReducerContext);

	const month = state.month === 4 ? 'kwietnia' : 'marca'

	const sentences = [
		'Wielkanoc to najważniejsze święto chrześcijańskie.',
		'W tym dniu wspominane jest zmartwychwstanie Chrystusa.'
	];
	const lastSentence = `W ${state.year} Wielkanoc wypada ${state.day} ${month}.`;

	return (
		<Page
			title='Wielkanoc'
			alt='Zdjęcie z Wielkiej Nocy'
			images={[image0, image1, image2]}
			sentences={sentences}
			lastSentence={lastSentence}
		/>
	);
};

export default Easter;
