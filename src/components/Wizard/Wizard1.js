import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Title from '../Title';
import {connect} from 'react-redux';
import {updatePropertyName, updatePropertyDescription } from '../../ducks/reducer'

class Wizard1 extends Component {
    render() {
        const {updatePropertyDescription,updatePropertyName} = this.props
        console.log(this.props.propertydescription);
        return (
            <div>
            <Title/>
                <h1>Step 1</h1>
                <br/>
                <p>Property Name</p>
                <input onChange={(e)=>updatePropertyName(e.target.value)} />
                <br/>
                <p>property Description</p>
                <input onChange={(e)=>updatePropertyDescription(e.target.vale)} />
                <nav>
                    <Link to={'/dashboard'}><button>previous</button></Link>
                    <Link to={'/wizard2'}><button>next</button></Link>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {propertyname, propertydescription} = state
    return{
        propertyname,
        propertydescription
    }
}

export default connect(mapStateToProps, {updatePropertyName,updatePropertyDescription})(Wizard1);