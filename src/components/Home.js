import React, { Component } from 'react';
//import Contact from './Contact';
import FeaturedProject from './FeaturedProject';
import Footer from './Footer';
import Intro from './Intro';
import Services from './Services';
//import Skills from './Skills';

class Home extends Component {
    render() {
        return (
            <div>
                <div className=''>
                    <Intro/>
                    <br/>
                    <h2 className='project-margin'><span className='border-blue padding text-blue' style={{borderBottom:'5px solid', fontSize:'min(7vw,40px)', fontWeight:'bold'}}>Featured Projects</span></h2>
                    <FeaturedProject/>
                    
                    <br/>
                    <div style={{margin:'0 36px'}}><hr/></div>
                    <div className='project-margin' style={{padding:'64px 0'}}>
                        <h2 className=''><span className='border-blue padding text-blue' style={{borderBottom:'5px solid', fontSize:'min(7vw,40px)', fontWeight:'bold'}}>My Services</span></h2>
                        <br/>

                        <Services/>
                    </div>
                </div>
                
                <div className='' style={{position:'relative'}}>
                    <div style={{backgroundColor:'black', transform:'rotate(5deg)', width:'120vw', height:'400px', marginLeft:'-36px'}}>
                        <div style={{transform:'rotate(-5deg)', color:'white', marginLeft:'36px'}}>
                        <br/><br/>
                        <div className='work-together'><span style={{fontSize:'min(7vw,36px)', borderBottom:'5px solid', fontWeight:'bold'}} className='border-light-blue padding text-light-blue'>Let's Work Together</span></div>
                        </div>
                    </div>
                    
                    <div style={{backgroundColor:'black', position:'absolute', width:'100vw', top:'150px'}}>
                        <br/>

                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

/**
  <div className='about-margin' style={{color:'white'}}>
                    <div style={{maxWidth:'800px', paddingLeft:'8px'}}>
                        <p style={{fontSize:'min(4vw,24px)'}}>NIVERB  hgh gp gg englegnlv belg`1 2345 6 7 8 9 0 0 -=    wqr ego []\
                        ';kuhufasazxvcbvmbn/ jbqn</p>
                        <p style={{fontSize:'min(4vw,24px)'}}>NIVERB  hgh gp gg englegnlv belg`1 2345 6 7 8 9 0 0 -=    wqrego[]\
                        ';kuhufasazxvcbvmbn/ jbqn</p>
                        <p style={{fontSize:'min(4vw,24px)'}}>NIVERB  hgh gp gg englegnlv belg`1 2345 6 7 8 9 0 0 -=    wqrego[]\
                        ';kuhufasazxvcbvmbn/ jbqn</p>
                    </div>
                </div>
                <br/>
 */