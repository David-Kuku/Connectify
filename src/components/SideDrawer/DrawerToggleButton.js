import React from 'react'
import './DrawerToggleButton.css'

const DrawerToggleButton =({ click }) =>{
    return(
        <button className='toggle-button ml2' onClick= {click}>
            <div className='toggle-line bg-blue'/>
            <div className='toggle-line bg-blue'/>
            <div className='toggle-line bg-blue'/>
        </button>
    )
}

export default DrawerToggleButton