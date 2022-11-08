import Page from '../../../Containers/Page/Page';
import image0 from '../../../assets/img/MaundyThursday/maundy-thursday.jpg';
import image1 from '../../../assets/img/MaundyThursday/maundy-thursday-1.jpg';
import image2 from '../../../assets/img/MaundyThursday/maundy-thursday-2.jpg';

const MaundyThursday = (props) => {
	const firstSentence =
		'Wielki Czwartek to wspomnienie ustanowienia Eucharystii i Kapłaństwa.';
	const secondSentence =
		'Tego dnia Jezus spożył Ostatnią Wieczerzę ze swoimi uczniami. Tego dnia rano sprawuje się Mszę Krzyżma w kościołach katedralnych, zaś wieczorem Mszę Wieczerzy.';
	const thirdSentence = 'W 2022 roku Wielki Czwartek wypada 14 kwietnia.';

	return (
		<Page
			title='Wielki Czwartek'
			images={[image0, image1, image2]}
			alt=''
			firstSentence={firstSentence}
			secondSentence={secondSentence}
			thirdSentence={thirdSentence}
		/>
	);
};

export default MaundyThursday;
