import Page from '../../../Containers/Page/Page';
import image0 from '../../../assets/img/GoodFriday/good-friday.jpg';
import image1 from '../../../assets/img/GoodFriday/good-friday-1.jpg';
import image2 from '../../../assets/img/GoodFriday/good-friday-2.jpg';

const GoodFriday = () => {
	const firstSentence =
		'Wielki Piątek to dzień smutku, postu, w którym szczególnie czci się krzyż.';
	const secondSentence =
		'Wielki Piątek jest dniem śmierci Jezusa na krzyżu. W tym dniu nie sprawuje się Mszy Świętej, a jedynie żałobną Liturgię Męki Pańskiej.';
	const thirdSentence = `W 2022 roku Wielki Piątek wypada 15 kwietnia.`;

	return (
		<Page
			title='Wielki Piątek'
			images={[image0, image1, image2]}
			alt=''
			firstSentence={firstSentence}
			secondSentence={secondSentence}
			thirdSentence={thirdSentence}
		/>
	);
};

export default GoodFriday;
