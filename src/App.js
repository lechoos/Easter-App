import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Containers/Header/Header';
import Footer from './Containers/Footer/Footer';
import Layout from './Containers/Layout/Layout';
import Home from './Components/Pages/Home/Home';
import Easter from './Components/Pages/Easter/Easter';
import EasterEve from './Components/Pages/EasterEve/EasterEve';
import GoodFriday from './Components/Pages/GoodFriday/GoodFriday';
import MaundyThursday from './Components/Pages/MaundyThursday/MaundyThursday';

function App() {

	const header = <Header />;
	const content = (
		<Suspense fallback='Ładowanie...'>
			<Routes>
				<Route end path='/' element={<Home />} />
				<Route path='wielkanoc' element={<Easter />} />
				<Route path='wielka-sobota' element={<EasterEve />} />
				<Route path='wielki-piatek' element={<GoodFriday />} />
				<Route path='wielki-czwartek' element={<MaundyThursday />} />
			</Routes>
		</Suspense>
	)
  const footer = <Footer />

	return (
		<div className='App'>
			<Router>
				<Layout 
					header={header}
					content={content}
					footer={footer}
				/>
			</Router>
		</div>
	);
}

export default App;
