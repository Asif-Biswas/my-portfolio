import React, { Component } from 'react';
import { FaCode, FaCss3Alt, FaLaptopCode, FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiDjango } from 'react-icons/si';
//import { RiComputerLine } from 'react-icons/ri';

class Services extends Component {
    render() {
        return (
            <div>
                <div className='service-container'>
                    <br/>
                    <div className='card-2' style={{textAlign:'center', backgroundColor:'rgb(245, 245, 245)', padding:'36px 0', borderTop:'rgb(0, 183, 255) solid 7px', borderRadius:'10px'}}>
                        <FaCode
                            style={{fontSize:'84px', margin:'8px', color:'rgb(0, 145, 255)'}}
                        />
                        <h2 style={{fontWeight:'bold', color:'rgb(0,145,255)'}}>Frontend Development</h2>
                        <h4 style={{color:'rgb(0,145,255)', opacity:'.8'}}>Responsive and User Friendly with</h4>
                        <h4 style={{color:'rgb(0,145,255)'}}>
                            <FaReact className='spin' style={{fontSize:'25px', marginBottom:'-4px',marginLeft:'7px'}}/> Reactjs, 
                            <IoLogoJavascript style={{fontSize:'25px', marginBottom:'-4px',marginLeft:'7px'}}/> Javascript and 
                            <FaCss3Alt style={{fontSize:'25px', marginBottom:'-4px',marginLeft:'7px'}}/> CSS3
                        </h4>
                        <p style={{fontSize:'18px', textAlign:'justify', padding:'8px 16px', color:'rgb(0,125,255)'}}>
                            Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be user friendly. Using Javascript, Reactjs and CSS I build Fast, Interactive, Responsive and User friendly websites. 
                        </p>
                    </div>
                    <br/>
                    <div className='card-2' style={{textAlign:'center', backgroundColor:'rgb(245, 245, 245)', padding:'36px 0', borderTop:'rgb(0, 183, 255) solid 7px', borderRadius:'10px'}}>
                        <FaLaptopCode
                            style={{fontSize:'84px', margin:'8px', color:'rgb(0, 145, 255)'}}
                        />
                        <h2 style={{fontWeight:'bold', color:'rgb(0,145,255)'}}>Backend Development</h2>
                        <h4 style={{color:'rgb(0,145,255)', opacity:'.8'}}>Secured, Fast and RESTful API with</h4>
                        <h4 style={{color:'rgb(0,145,255)'}}>
                            <FaPython style={{fontSize:'25px', marginBottom:'-4px'}}/> Python and
                            <SiDjango style={{fontSize:'25px', marginBottom:'-4px', marginLeft:'7px'}}/> Django 
                        </h4>
                        <p style={{fontSize:'18px', textAlign:'justify', padding:'8px 16px', color:'rgb(0,125,255)'}}>Personally I love to write code for Backend. Because, it takes less time to develop than frontend. Using django-rest-framework, I can also create RESTful API. </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;