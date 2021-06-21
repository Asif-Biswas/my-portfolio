import React, { Component } from 'react';
import Footer from './Footer';
import Services from './Services';
import Skills from './Skills';
import { FcAbout } from 'react-icons/fc';
//import { GrUserWorker } from 'react-icons/gr';
import { FaBook, FaHandshake } from 'react-icons/fa';
//import asif4 from '../images/asif4.png'

class About extends Component {
    //componentDidMount(){
        //window.scrollBy(0,60)
        //alert(0)
        //this.scrollToBottom()
    //}
    scrollToBottom=()=>{
        //const {scroll} = this.refs
        this.scroll.scrollIntoView({behavior: 'smooth'})
    }
    render() {
        return (
            <div className='' style={{marginTop:'-64px'}}>
                <div className='bgc' style={{transform:'rotate(5deg)', width:'120vw', paddingBottom:'50px', zIndex:'2', marginLeft:'-16px'}}>
                    <div className='' style={{transform:'rotate(-5deg)', width:'100vw'}}>
                        <br/><br/>
                        <div style={{textAlign:'center', color:'white', marginLeft:'36px'}}>
                            <h1 style={{fontSize:'50px'}}>About me</h1>
                            <h6 style={{fontSize:'30px', opacity:'.7'}}>Find out who I am, where I'm from and what I'm all about.</h6>
                        </div>
                        <br/><br/>

                        
                    </div>
                </div>

                <div style={{paddingBottom:'100px'}} className='about-margin'>
                    <div>
                        <h1 style={{fontFamily:'revert', fontWeight:'bold', color:'rgb(0,130,255)'}}><FcAbout style={{marginBottom:'-6px', color:'rgb(0,130,255)'}} /> Who I Am</h1>
                        <h3 style={{paddingLeft:'24px', color:'rgb(0,100,155)', maxWidth:'700px', textAlign:'justify'}}>My name is <b>Asif Biswas</b>. I'm a full-stack web developer from Dhaka, Bangladesh.</h3>
                        <h3 style={{paddingLeft:'24px', color:'rgb(0,100,155)', maxWidth:'700px', textAlign:'justify'}}>I enjoy creating things that live on the internet. Programming and problem solving is my most favourite.</h3>
                        <br/>
                        <h1 style={{fontFamily:'revert', fontWeight:'bold', color:'rgb(0,130,255)'}}><FaBook style={{marginBottom:'-6px', color:'rgb(0,130,255)'}} /> Education</h1>
                        <h3 style={{paddingLeft:'24px', color:'rgb(0,100,155)', maxWidth:'700px', textAlign:'justify'}}>I'm a self-taught web developer. Almost everything about programming or coding, I've learned from the internet.</h3>
                        <h3 style={{paddingLeft:'24px', color:'rgb(0,100,155)', maxWidth:'700px', textAlign:'justify'}}>I'm doing B.Sc (honours) in Mathematics in a traditional college named Kabi Nazrul Govt. College (affiliated to University of Dhaka).</h3>
                        <br/>
                        <h1 style={{fontFamily:'revert', fontWeight:'bold', color:'rgb(0,130,255)'}}><FaHandshake style={{marginBottom:'-6px', color:'rgb(0,130,255)', fontSize:'36px'}} /> Why Work With Me</h1>
                        <h3 style={{paddingLeft:'24px', color:'rgb(0,100,155)', maxWidth:'700px', textAlign:'justify'}}>First of all, if you are looking for a Django/Reactjs developer, then hiring me, can be a great decision for you. Because I know, how to code. As you can see in my Facebook clone project, almost every topic about django and react was covered.</h3>
                        <h3 style={{paddingLeft:'24px', color:'rgb(0,100,155)', maxWidth:'700px', textAlign:'justify'}}>I always try to be responsible for my work.</h3>
                    </div>
                </div>
                <div className='project-margin'>
                    <h2 className=''><span className='border-blue padding text-blue' style={{borderBottom:'5px solid', fontSize:'min(7vw,40px)', fontWeight:'bold'}}>My Services</span></h2>
                        <br/>
                    <Services/>
                    <br/><br/><br/>
                </div>
                <Skills/>

                <div className='' style={{position:'relative'}}>
                    <div style={{backgroundColor:'black', transform:'rotate(5deg)', width:'120vw', height:'400px', marginLeft:'-36px'}}>
                        <div style={{transform:'rotate(-5deg)', color:'white', marginLeft:'36px'}}>
                        <br/>
                        <div className='work-together'><span style={{fontSize:'min(7vw,36px)', borderBottom:'5px solid', fontWeight:'bold'}} className='border-light-blue padding text-light-blue'>Let's Work Together</span></div>
                        </div>
                    </div>
                    <div style={{backgroundColor:'black', position:'absolute', width:'100vw', top:'150px'}}>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;

/**
 * <div style={{display:'flex', justifyContent:'center'}}>
                            <div style={{width:'40%', marginRight:'8px', marginLeft:'8px'}}>
                                <img className='' width='100%' src={asif4} alt='my pic' style={{filter:'drop-shadow(16px 0px 16px #222)', maxWidth:'450px', border:'rgba(255,255,255,1) 3px solid', borderRadius:'50%',}}/>
                            </div>
                            
                            <div style={{display:'flex', alignItems:'center', width:'60%', maxWidth:'500px'}}>
                                <div className='text-shadow text-white' style={{textAlign:'left', width:'100%', paddingLeft:'16px', marginRight:'16px'}}>
                                    <h3><span className='font-family-my-name' style={{fontSize:'min(6vw,50px)'}}>Hi, I'm Asif.</span></h3>
                                    
                                    
                                    <h3 className='font-family-details' style={{fontSize:'min(3.5vw,24px)', textAlign:'justify'}}>I am a Full Stack Web Developer. I believe, if you can imagine something for the web, then I can make that real.</h3>
                                </div>
                            </div>
                        </div>
 */





/**
 * <br/>
                        <br/>
                        <br/>

                        <div className='about-margin' ref={(el)=>{this.scroll = el}} style={{color:'white', maxWidth:'700px'}}>
                            
                            <h1 style={{fontSize:'min(7vw, 36px'}}>My name is <b>Asif Biswas</b>.</h1>
                            <h3 style={{fontSize:'min(5vw, 26px', textAlign:'justify'}}>I live in Dhaka, Bangladesh. </h3>
                            
                            <br/>
                            <h3 style={{fontSize:'min(5vw, 26px', textAlign:'justify'}}>Personally I love to write code for Back-end, but I can also develop Front-end according to any needs.</h3>

                            <br/>
                            <h3 style={{fontSize:'min(5vw, 26px', textAlign:'justify'}}>Programming is my most favourite. I love to solve problem. Especially critical problems. I know, anyhow I can solve that. And this is the reason, why I love Back-end development.</h3>

                            <br/>
                            <h3 style={{fontSize:'min(5vw, 26px', textAlign:'justify'}}>Sometimes I think, Front-end is easier than Back-end. But relativly it takes more time to develop than back-end.</h3>
                            <br/>
                            <h3 style={{fontSize:'min(5vw, 26px', textAlign:'justify'}}>I'm a self taught web developer. Almost everything about programming or coding, I have learnt from the internet (especially Youtube) and still learning.</h3>
                            
                            
                        </div>

 */