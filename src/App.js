import './App.css';
import Header from './Containers/Header/Header';
import InputModal from './Components/InputModal/InputModal';
import Modal from './Containers/Modal/Modal';
import ModalGrid from './Containers/ModalGrid/ModalGrid';
import Footer from './Containers/Footer/Footer';
import Layout from './Containers/Layout/Layout';

function App() {
	const stan = true;

	const easter = (
		<Modal
      id='easter'
			name='Wielkanoc'
			modalBackground='#b69029'
			linkBackground='#e0bc5a'
		/>
	);

	const easterEve = (
		<Modal
      id='easter-eve'
			name='Wielka Sobota'
			modalBackground='#3e174e'
			linkBackground='#793096'
		/>
	);
	const goodFriday = (
		<Modal
      id='good-friday'
			name='Wielki Piątek'
			modalBackground='#901717'
			linkBackground='#c93636'
		/>
	);
	const maundyThursday = (
		<Modal
      id='maundy-thursday'
			name='Wielki Czwartek'
			modalColor='#000'
			modalBackground='#eeedc1'
			linkColor='#000'
			linkBackground='#d1d1d1'
		/>
	);

	const header = <Header title='Easter App' />;
	const content = (
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
	);
  const footer = <Footer />

	return (
		<div className='App'>
			<Layout 
        header={header}
        content={content}
        footer={footer}
      />
		</div>
	);
}

export default App;
