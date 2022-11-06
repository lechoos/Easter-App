import Page from "../../../Containers/Page/Page";

const MaundyThursday = props => {
  const firstSentence = 'Wielki Czwartek to wspomnienie ustanowienia Eucharystii i Kapłaństwa.';
  const secondSentence = 'Tego dnia Jezus spożył Ostatnią Wieczerzę ze swoimi uczniami. Tego dnia rano sprawuje się Mszę Krzyżma w kościołach katedralnych, zaś wieczorem Mszę Wieczerzy.';
  const thirdSentence = 'W 2022 roku Wielki Czwartek wypada 14 kwietnia.';

  return (
    <Page 
      title='Wielki Czwartek'
      src=''
      alt=''
      firstSentence={firstSentence}
      secondSentence={secondSentence}
      thirdSentence={thirdSentence}
    />
  )
}

export default MaundyThursday;