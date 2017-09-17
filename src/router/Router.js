import React from 'react';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Login from '../containers/login/Login';
import Forgive from '../components/login/Forgive'

class Routerall extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/forgive" component={Forgive}/>
                </Switch>
            </Router>
        )
    }
}

export default Routerall;