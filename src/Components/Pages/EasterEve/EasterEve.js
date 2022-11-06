import Page from "../../../Containers/Page/Page";

const EasterEve = () => {
  const firstSentence = 'Wielka Sobota to dzień zadumy, żałoby po śmierci Jezusa';
  const secondSentence = 'W tym dniu święci się pokarmy, ale nie odprawia się Mszy Świętej';
  const thirdSentence = `W 2022 Wielka Sobota wypada 16 kwietnia`

  return (
    <Page 
      title='Wielka Sobota'
      src=''
      alt=''
      firstSentence={firstSentence}
      secondSentence={secondSentence}
      thirdSentence={thirdSentence}
    />
  )
}

export default EasterEve;