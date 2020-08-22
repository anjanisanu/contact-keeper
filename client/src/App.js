import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className='container'>
					<Navbar />
					<main className='main'>
						<Switch>
							<Route exact path='/' component={Home} />
						</Switch>
					</main>
					<Footer />
				</div>
			</Router>
		</Provider>
	);
}

export default App;
