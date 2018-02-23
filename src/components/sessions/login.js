import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { login, register } from "../../ducks/reducer";
// import login from './login.css'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username:'',
            password:''

        }
        this.login = this.login.bind( this );
        this.register = this.register.bind( this );
    }
    login() {
        const { login, history } = this.props;
        const { username, password } = this.state;
        login({ username, password }, history);
      }
    
      register() {
        const { register, history } = this.props;
        const { username, password } = this.state;
        register({ username, password }, history);
      }


      handleChange( prop, val ) {
        this.setState({ [prop]: val });
      }
    
    render() {
        console.log(this.props)
        console.log(this.state);
        
        return (
            <div>
                 <br/>
                <p>Username</p>
                <input className="Login__input" type="text" placeholder="Username" onChange={ (e) => this.handleChange('username' , e.target.value) }/>
                <br/>
                <p>Password</p>
                <input className="Login__input" type="password" placeholder="Password" onChange={ (e) => this.handleChange('password' , e.target.value) }/>
                <br/>
                <button className="Login__btn" id="Login__loginBtn" onClick={ this.login }>Login </button>
                <Link to='/dashboard'><button className="Login__btn" id="Login__registerBtn" onClick={ this.register }>Register </button></Link>
            </div>
        );
    }
}

export default connect(state=>state, {login,register}) (Login);
