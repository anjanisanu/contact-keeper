import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Footer from './components/layout/Footer';

import setAuthToken from './utils/setAuthToken';
import './App.css';

function App() {
	if (localStorage.token) setAuthToken(localStorage.token);

	return (
		<Provider store={store}>
			<Router>
				<div className='container'>
					<Navbar />
					<main className='main'>
						<Alerts />
						<Switch>
							<PrivateRoute exact path='/' component={Home} />
							<Route exact path='/about' component={About} />
							<Route exact path='/login' component={Login} />
							<Route exact path='/register' component={Register} />
						</Switch>
					</main>
					<Footer />
				</div>
			</Router>
		</Provider>
	);
}

export default App;
