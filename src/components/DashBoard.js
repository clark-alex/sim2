import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title'
import axios from 'axios'



class DashBoard extends Component {
    constructor(props) {
        super(props);
        

        this.state= {
            houses:{}
        }
    }
    


componentDidMount(){
    axios.get('http://localhost:3030/api/getAll').then((res)=>{
        this.setState({houses: res.data})
    })
}

    render() {
        console.log(this.state)
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