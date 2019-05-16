import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Provider , connect } from 'react-redux';
import store from './store';

import SomePage from './Pages/SomePage';
import LandingPage from './Pages/LandingPage';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Provider store={store}>
						<Switch>
							<Route
								path="/"
								exact
								component={LandingPage} />}
							/>
							<Route path="/some-route" exact component={SomePage} />
						</Switch>
					</Provider>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
