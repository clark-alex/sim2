import React from 'react'
import './Title.css'
import {Link} from 'react-router-dom'


export default function Title() {
    return (
        < div className="header">
        <h4>Houser Dashboard</h4>
        <Link to='/'><button>Logout</button></Link>
        </div >
    )
}