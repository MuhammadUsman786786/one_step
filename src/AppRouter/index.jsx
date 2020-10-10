import Home from "../Containers/Home";
import React, {PureComponent} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

class AppRouter extends PureComponent {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={ Home }/>
					<Redirect to='/'/>
				</Switch>
			</Router>
		)
	}
}


export default AppRouter
