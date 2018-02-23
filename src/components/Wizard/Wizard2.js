import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Title from '../Title';
import {connect} from 'react-redux';
import {updateAddress, updateCity, updateHouseState, updateZip} from '../../ducks/reducer'

class Wizard2 extends Component {
    render() {
        const {updateAddress, updateCity, updateHouseState, updateZip} = this.props
        console.log(this.props)
        return (
            <div>
                <Title/>
                <p>Address</p>
                <input onChange={(e)=>updateAddress(e.target.value)} />
                <div>
                    <p>city</p>
                    <input onChange={(e)=>updateCity(e.target.value)}/>
                    <p>state</p>
                    <input onChange={(e)=>updateHouseState(e.target.value)} />
                    </div>
                    <p>zip</p>
                    <input onChange={(e)=>updateZip(e.target.value)} />
                 
            </div>
        );
    }
}
function mapStateToProps(state){
    const {address, city, housestate, zip} = state
    return{
        address,
        city,
        housestate,
        zip
    }
}


export default connect(mapStateToProps, {updateAddress, updateCity, updateHouseState, updateZip}) (Wizard2);