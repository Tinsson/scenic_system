import React,{ Component } from 'react';
import Login from '../../components/login/Login'
import '../css/container.css'

class LoginSmart extends Component{
    render(){
        return(
            <div className="loginSmart">
                <Login/>
            </div>
        )
    }
}

export default LoginSmart;