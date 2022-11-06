import Page from "../../../Containers/Page/Page";

const GoodFriday = props => {
  const firstSentence = 'Wielki Piątek to dzień smutku, postu, w którym szczególnie czci się krzyż.'
  const secondSentence = 'Wielki Piątek jest dniem śmierci Jezusa na krzyżu. W tym dniu nie sprawuje się Mszy Świętej, a jedynie żałobną Liturgię Męki Pańskiej.'
  const thirdSentence = `W 2022 roku Wielki Piątek wypada 15 kwietnia.`

  return (
    <Page 
      title='Wielki Piątek'
      src=''
      alt=''
      firstSentence={firstSentence}
      secondSentence={secondSentence}
      thirdSentence={thirdSentence}
    />
  )
}

export default GoodFriday;