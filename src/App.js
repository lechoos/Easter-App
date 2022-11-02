import './App.css';
import Header from './Containers/Header/Header';
import Modal from './Containers/Modal/Modal';

function App() {
  return (
    <div className="App">
      <Header />
      <Modal 
        name='Wielkanoc'
        modalColor='#fff'
        modalBackground='#b69029' />
      <Modal 
        name='Wielka Sobota'
        modalColor='#fff'
        modalBackground='#3e174e' />
      <Modal 
        name='Wielki Piątek'
        modalColor='#fff'
        modalBackground='#901717' />
      <Modal 
        name='Wielki Czwartek'
        modalColor='#000'
        modalBackground='#eeedc1' />
    </div>
  );
}

export default App;
