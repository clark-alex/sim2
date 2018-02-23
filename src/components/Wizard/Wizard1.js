import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Title from '../Title';
import {connect} from 'react-redux';
import axios from 'axios';
import {updatePropertyName, updatePropertyDescription } from '../../ducks/reducer'

class Wizard1 extends Component {
  
    
    
insert1(){
    console.log("inFn",this.propertyname)
    axios.post('http://localhost:3030/api/insert',{propertydescription: this.props.propertydescription,propertyname:this.props.propertyname}).then(
        (res)=>console.log('res.data',res.data)
    )
}

    render() {

        const {updatePropertyDescription,updatePropertyName} = this.props
        console.log('prop name', this.props.propertyname);
        console.log('prop desc', this.props.propertydescription);
        
        return (
            <div>
            <Title/>
                <h1>Step 1</h1>
                <br/>
                <p>Property Name</p>
                <input onChange={(e)=>updatePropertyName(e.target.value)} />
                <br/>
                <p>property Description</p>
                <input onChange={(e)=>updatePropertyDescription(e.target.value)} />
                <nav>
                    <Link to={'/dashboard'}><button>previous</button></Link>
                    <Link to={'/wizard2'}><button onClick={()=>this.insert1()}>next</button></Link>
                    <button onClick={()=>this.insert1()}>next one</button>
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