import Page from "../../../Containers/Page/Page";
import image0 from '../../../assets/img/Easter/easter.jpg';
import image1 from '../../../assets/img/Easter/easter-1.jpg';
import image2 from '../../../assets/img/Easter/easter-2.jpg';

const Easter = props => {

  const firstSentence = 'Wielkanoc to najważniejsze święto chrześcijańskie.';
  const secondSentence = 'W tym dniu wspominane jest zmartwychwstanie Chrystusa.';
  const thirdSentence = `W 2022 Wielkanoc wypada 17 kwietnia.`;


  return (
    <Page 
      title='Wielkanoc'
      alt='Zdjęcie'
      images={[image0, image1, image2]}
      firstSentence={firstSentence}
      secondSentence={secondSentence}
      thirdSentence={thirdSentence}
    />
  )
}

export default Easter;