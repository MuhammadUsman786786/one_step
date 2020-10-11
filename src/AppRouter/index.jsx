import React, { PureComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Home } from "../Containers";
import { ROUTES } from '../Utilities/constants'

class AppRouter extends PureComponent {

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path={ROUTES.HOME} component={Home} />
					<Redirect to={ROUTES.HOME} />
				</Switch>
			</Router>
		)
	}
}


export default AppRouter
