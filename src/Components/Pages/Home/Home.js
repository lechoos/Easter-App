import InputModal from "../../InputModal/InputModal";
import Modal from "../../../Containers/Modal/Modal";
import ModalGrid from "../../../Containers/ModalGrid/ModalGrid";

const Home = () => {
  const stan = true;

  const easter = (
		<Modal
      id='wielkanoc'
			day='17'
			month='4'
			name='Wielkanoc'
			modalBackground='#b69029'
			linkBackground='#e0bc5a'
		/>
	);

	const easterEve = (
		<Modal
      id='wielka-sobota'
			day='16'
			month='4'
			name='Wielka Sobota'
			modalBackground='#3e174e'
			linkBackground='#793096'
		/>
	);
	const goodFriday = (
		<Modal
      id='wielki-piatek'
			day='15'
			month='4'
			name='Wielki Piątek'
			modalBackground='#901717'
			linkBackground='#c93636'
		/>
	);
	const maundyThursday = (
		<Modal
      id='wielki-czwartek'
			day='14'
			month='4'
			name='Wielki Czwartek'
			modalColor='#000'
			modalBackground='#eeedc1'
			linkColor='#000'
			linkBackground='#d1d1d1'
		/>
	);

  return (
    <>
			<InputModal />
			{stan 
        ? <ModalGrid
				    easter={easter}
				    easterEve={easterEve}
				    goodFriday={goodFriday}
				    maundyThursday={maundyThursday}
			    />  
        : null}
		</>
  )
}

export default Home;