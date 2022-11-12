import Page from '../../../Containers/Page/Page';
import image0 from '../../../assets/img/Easter/easter.jpg';
import image1 from '../../../assets/img/Easter/easter-1.jpg';
import image2 from '../../../assets/img/Easter/easter-2.jpg';

const Easter = (props) => {
	const sentences = [
		'Wielkanoc to najważniejsze święto chrześcijańskie.',
		'W tym dniu wspominane jest zmartwychwstanie Chrystusa.'
	];
	const lastSentence = `W 2022 Wielkanoc wypada 17 kwietnia.`;

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
