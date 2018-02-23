import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title'


class DashBoard extends Component {
    render() {
        return (
            <div>
                <Title />
                <div>
                    <Link to='/wizard1'><button>Add New Property</button></Link>
                </div>
                <div>
                    <p>List properties with "desired rent" greator than: $</p>
                    <input />
                    <button>Filter</button>
                    <button>Reset</button>
                    </div>
            </div>
        );
    }
}

export default DashBoard;