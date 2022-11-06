import Page from "../../../Containers/Page/Page";

const Easter = props => {

  const firstSentence = 'Wielkanoc to najważniejsze święto chrześcijańskie.';
  const secondSentence = 'W tym dniu wspominane jest zmartwychwstanie Chrystusa.';
  const thirdSentence = `W 2022 Wielkanoc wypada 17 kwietnia.`;


  return (
    <Page 
      title='Wielkanoc'
      firstSentence={firstSentence}
      secondSentence={secondSentence}
      thirdSentence={thirdSentence}
      src=''
      alt='Zdjęcie'
    />
  )
}

export default Easter;