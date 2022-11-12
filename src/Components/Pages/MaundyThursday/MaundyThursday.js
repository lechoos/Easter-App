import Page from '../../../Containers/Page/Page';
import image0 from '../../../assets/img/MaundyThursday/maundy-thursday.jpg';
import image1 from '../../../assets/img/MaundyThursday/maundy-thursday-1.jpg';
import image2 from '../../../assets/img/MaundyThursday/maundy-thursday-2.jpg';

const MaundyThursday = (props) => {
	const sentences = [
		'Wielki Czwartek to wspomnienie ustanowienia Eucharystii i Kapłaństwa.',
		'Tego dnia Jezus spożył Ostatnią Wieczerzę ze swoimi uczniami. Tego dnia rano sprawuje się Mszę Krzyżma w kościołach katedralnych, zaś wieczorem Mszę Wieczerzy Pańskiej.'
	];
	const lastSentence = 'W 2022 roku Wielki Czwartek wypada 14 kwietnia.';

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
