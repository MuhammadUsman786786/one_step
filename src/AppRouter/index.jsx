import {Home} from "../Containers";
import React, {PureComponent} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


class AppRouter extends PureComponent {
	
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/:id' component={ Home }/>
					<Route component={ Home }/>
				</Switch>
			</Router>
		)
	}
}


export default AppRouter
