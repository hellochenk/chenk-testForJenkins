import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Link ,Route } from 'react-router-dom';
// import { paths } from './constants/config';
import { createRouter } from './routers/index'
import styles from './styles.scss';

let routerArr = createRouter();
const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => <route.component 
            {...props} 
            // store={route.store} 
            routes={route.routes} 
        />}
    />
)

class Home extends React.Component {
    render(){
        return (
            <div className={styles.root}>
                <Router>
                    <Switch>
                        {
                            routerArr.map((route,i) => <RouteWithSubRoutes key={i} {...route} />)
                        }
                    </Switch>
                </Router>
            </div>
        )
    }
}

const root = document.getElementById('root')
ReactDOM.render(<Home />, root);
