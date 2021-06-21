import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div className='bgc'>
                <div className='flex' style={{width:'100%', padding:'24px 0px 16px 0px', paddingBottom:'100px',}}>
                <div style={{display:'flex', justifyContent:'flex-start', marginLeft:'36px', marginTop:'6px', opacity:'0'}} className='font hide-small fixnavbarwidth text-white'>&#9776;</div>
                    <div className='' style={{display:'flex', justifyContent:'space-around', width:'100%', zIndex:'2'}}>
                        
                        <NavLink to='/'><div className='font cool-link pointer text-white text-shadow' style={{padding:'8px'}}>Home</div></NavLink>
                        <NavLink activeClassName='hover-border-none' to='/projects'><div className='font cool-link pointer text-white text-shadow' style={{padding:'8px',}}>Projects</div></NavLink>
                        <NavLink activeClassName='hover-border-none' to='/about'><div className='font cool-link pointer text-white text-shadow' style={{padding:'8px',}}>About</div></NavLink>
                        <NavLink activeClassName='hover-border-none' to='/contact'><div className='font cool-link pointer text-white text-shadow' style={{padding:'8px',}}>Contact</div></NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;