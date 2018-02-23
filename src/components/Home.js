import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <br/>
                <p>Username</p>
                <input />
                <br/>
                <p>Password</p>
                <input />
                <br/>
                <button>log in</button>
                <Link to='/dashboard'><button>Register</button></Link>
            </div>
        );
    }
}

export default Home;

    // <Link to='/'>Home</Link> <br />
    // <Link to='/dashboard'>dashboard</Link> <br />
    // <Link to='/wizard'> wizard</Link>