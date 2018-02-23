import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './sessions/login';
import home from './home.css'

class Home extends Component {
    render() {
        return (
            <div className='homeBody'>
            <section className='middleBody' >
                <Login/>
            </section>
            </div>
        );
    }
}

export default Home;
