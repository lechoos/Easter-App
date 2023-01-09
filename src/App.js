import { useReducer, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import NotFound from './Pages/404/404';
import { initialState, reducer } from './reducer';
import ReducerContext from './context/reducerContext';
import ClipLoader from 'react-spinners/ClipLoader';

const Easter = lazy(() => import('./Pages/Easter/Easter.js'));
const EasterEve = lazy(() =>
	import('./Pages/EasterEve/EasterEve.js')
);
const GoodFriday = lazy(() =>
	import('./Pages/GoodFriday/GoodFriday.js')
);
const MaundyThursday = lazy(() =>
	import('./Pages/MaundyThursday/MaundyThursday.js')
);

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const header = <Header />;
	const content = (
		<Router>
			<Suspense fallback={<ClipLoader color={'#fff'} />}>
				<Routes>
					<Route end path='/' element={<Home />} />
					<Route path='wielkanoc' element={<Easter />} />
					<Route path='wielka-sobota' element={<EasterEve />} />
					<Route path='wielki-piatek' element={<GoodFriday />} />
					<Route path='wielki-czwartek' element={<MaundyThursday />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</Router>
	);
	const footer = <Footer />;

	return (
		<div>
			<ReducerContext.Provider
				value={{
					state: state,
					dispatch: dispatch,
				}}>
				<Layout header={header} content={content} footer={footer} />
			</ReducerContext.Provider>
		</div>
	);
}

export default App;
