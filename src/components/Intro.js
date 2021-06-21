import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import asif4 from '../images/asif4.png'

class Intro extends Component {
    render() {
        return (
            <div className='bgc' style={{transform:'rotate(7deg)', paddingBottom:'36px', width:'120vw', overflowX:'hidden', overflowY:'hidden', marginTop:'-80px', marginLeft:'-36px'}}>
                <div style={{width:'113vw'}}>
                    <div style={{display:'flex', justifyContent:'center', padding:'16px 0 0 50px', transform:'rotate(-7deg)', width:'102vw'}}>
                        <div style={{width:'40%', marginRight:'8px'}}>
                            <img className='' width='100%' src={asif4} alt='my pic' style={{filter:'drop-shadow(16px 0px 16px #222)', maxWidth:'400px', border:'rgba(255,255,255,1) 3px solid', borderRadius:'50%',}}/>
                        </div>
                        
                        <div style={{display:'flex', alignItems:'center', width:'60%', maxWidth:'500px'}}>
                            <div className='text-shadow text-white' style={{textAlign:'left', width:'100%', paddingLeft:'16px'}}>
                                <h3><span className='font-family-my-name' style={{fontSize:'min(6vw,50px)'}}>Hi, I'm Asif.</span></h3>
                                
                                
                                <h3 className='font-family-details' style={{fontSize:'min(3.5vw,24px)', textAlign:'justify'}}>I am a Full Stack Web Developer. I believe, if you can imagine something for the web, then I can make that real.</h3>
                            </div>
                        </div>
                    </div>
                    <div style={{transform:'rotate(-7deg)', float:'right', marginRight:'10%'}}>
                        <Link to='/projects'><button className='pointer hover-white hover-text-indigo indigo border border-indigo' style={{fontSize:'min(4vw,36px)', padding:'min(2vw,16px) min(5vw,46px)', borderRadius:'50px', color:'white', border:'1px solid black'}}>My Projects</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;