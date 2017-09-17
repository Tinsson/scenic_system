import React ,{Component} from 'react';
import Copyright from '../common/Copyright'
import Sendmsg from './Sendmsg';
import Logo from '../common/Logo'
import './login.css'

class Login extends Component{
    constructor(){
        super();
        this.state = {
            start: 2016,
            end: 2017,
            name: 'Tinsson'
        }
    }
    render(){
        return(
            <div className="loginPage">
                <Logo />
                <Sendmsg />
                <Copyright start={this.state.start} end={this.state.end} name={this.state.name}/>
            </div>
        )
    }
}

export default Login;