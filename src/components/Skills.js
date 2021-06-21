import React, { Component } from 'react';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaPython, FaReact, FaSearch } from 'react-icons/fa';
import { SiDjango, SiRedux } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';

class Skills extends Component {
    render() {
        return (
            <div className='skill-background' style={{transform:'rotate(5deg)', width:'130vw', marginLeft:'-64px', paddingBottom:'66px'}}>
                <div style={{transform:'rotate(-5deg)', marginLeft:'64px', width:'100vw'}}>
                    <div className='about-margin'>
                    <br/>
                        <h2><span style={{fontSize:'min(6vw,36px)', borderBottom:'solid 5px'}} className='border-white padding text-white'>Technologies I familiar with:</span></h2>
                        <br/>
                        <div>
                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <FaPython style={{fontSize:'min(6vw,28px)', color:'white', marginBottom:'-8px'}}/>
                                        <span style={{fontSize:'min(5vw,28px)', color:'white'}}> Python</span>
                                    </div>
                                </div>
                                <div className='border border-white' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='white' style={{width:'70%', height:'20px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <SiDjango style={{fontSize:'min(6vw,28px)', color:'white', marginBottom:'-8px'}}/>
                                        <span style={{fontSize:'min(5vw,28px)', color:'white'}}> Django</span>
                                    </div>
                                </div>
                                <div className='border border-white' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='white' style={{width:'80%', height:'20px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <IoLogoJavascript style={{fontSize:'min(6vw,28px)', color:'white', marginBottom:'-8px'}}/>
                                        <span style={{fontSize:'min(5vw,28px)', color:'white'}}> Javascript</span>
                                    </div>
                                </div>
                                <div className='border border-white' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='white' style={{width:'70%', height:'20px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <FaReact className='spin' style={{fontSize:'min(6vw,28px)', color:'white', marginBottom:'-8px'}}/>
                                        <span style={{fontSize:'min(5vw,28px)', color:'white'}}> Reactjs</span>
                                    </div>
                                </div>
                                <div className='border border-white' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='white' style={{width:'80%', height:'20px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <SiRedux style={{fontSize:'min(6vw,28px)', color:'white', marginBottom:'-8px'}}/>
                                        <span style={{fontSize:'min(5vw,28px)', color:'white'}}> Redux</span>
                                    </div>
                                </div>
                                <div className='border border-white' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='white' style={{width:'70%', height:'20px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <FaBootstrap style={{fontSize:'min(6vw,28px)', color:'white', marginBottom:'-8px'}}/>
                                        <span style={{fontSize:'min(5vw,28px)', color:'white'}}> Bootstrap</span>
                                    </div>
                                </div>
                                <div className='border border-white' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='white' style={{width:'80%', height:'20px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <FaCss3Alt style={{fontSize:'min(6vw,28px)', color:'white', marginBottom:'-8px'}}/>
                                        <span style={{fontSize:'min(5vw,28px)', color:'white'}}> CSS3</span>
                                    </div>
                                </div>
                                <div className='border border-white' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='white' style={{width:'85%', height:'20px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <FaHtml5 style={{fontSize:'min(6vw,28px)', color:'white', marginBottom:'-8px'}}/>
                                        <span style={{fontSize:'min(5vw,28px)', color:'white'}}> HTML5</span>
                                    </div>
                                </div>
                                <div className='border border-white' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='white' style={{width:'90%', height:'20px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <FaReact style={{fontSize:'min(6vw,28px)', color:'white', marginBottom:'-8px'}}/>
                                        <span style={{fontSize:'min(5vw,28px)', color:'white'}}> React Native</span>
                                    </div>
                                </div>
                                <div className='border border-white' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='white' style={{width:'45%', height:'20px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <div style={{margin:'8px 16px'}}>
                                <div style={{display:'flex', marginBottom:'8px'}}>
                                    <div>
                                        <FaSearch style={{fontSize:'min(6vw,28px)', color:'white', marginBottom:'-8px'}}/>
                                        <span style={{fontSize:'min(5vw,28px)', color:'white'}}> Googling😜</span>
                                    </div>
                                </div>
                                <div className='border border-white' style={{maxWidth:'700px', marginRight:'80px', marginLeft:'16px'}}>
                                    <div className='white' style={{width:'80%', height:'20px', textAlign:'right'}}><span style={{color:'blue'}}></span></div>
                                </div>
                            </div>

                            <br/><br/>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;