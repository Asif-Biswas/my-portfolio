import React, { Component } from 'react';
import AllProjects from './AllProjects';
//import FeaturedProject from './FeaturedProject';
import Footer from './Footer';

class Projects extends Component {
    render() {
        return (
            <div style={{marginTop:'-80px', width:'100vw', backgroundColor:'white'}}>
                <br/>
                <h2 className='project-margin'><span style={{fontSize:'min(7vw,36px)', borderBottom:'4px double', fontWeight:'bold'}} className='padding text-blue border-blue'>My Projects</span></h2>
                <p className='border-left border-blue project-margin opacity padding'>Note: If you visit any site, it may take 10 second to open.</p>
                <AllProjects/>
                <br/>
                <br/>
                <br/>
                
                <div className='black'>
                    <br/>
                    <br/>
                    <div className='work-together'><span style={{fontSize:'min(7vw,36px)', borderBottom:'5px solid', fontWeight:'bold'}} className='border-light-blue padding text-light-blue'>Let's Work Together</span></div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Projects;

/*
<div className='border border-white' style={{paddingLeft:'8px'}}>
                        <p style={{fontSize:'min(4vw,20px)'}}>
                            Frontend : Reactjs,<br/>
                            Backend : -,<br/>
                            Github : <a href="https://github.com/Asif-Biswas/facebook-home-page-clone" rel="noreferrer" title="https://github.com/Asif-Biswas/facebook-home-page-clone" target="_blank" className='hover-text-blue'>Click here</a>
                        </p>
                    </div>


                    <div className='border border-white' style={{paddingLeft:'8px'}}>
                        <p style={{fontSize:'min(4vw,20px)'}}>
                            Frontend : HTML + CSS,<br/>
                            Backend : Django,<br/>
                            Github : <a href="https://github.com/Asif-Biswas/youtube-clone" rel="noreferrer" title="https://github.com/Asif-Biswas/youtube-clone" target="_blank" className="hover-text-blue">Click here</a>
                        </p>
                    </div>

                    <div className='border border-white' style={{paddingLeft:'8px'}}>
                        <p style={{fontSize:'min(4vw,20px)'}}>
                            Frontend : Reactjs,<br/>
                            Backend : Django (django-rest-framework),<br/>
                            <span style={{textAlignLast:'right'}}>Github : <a href="https://github.com/Asif-Biswas/facebook-clone-frontend" title="https://github.com/Asif-Biswas/facebook-clone-frontend" rel="noreferrer" target="_blank" className="hover-text-blue">Click here (Frontend code)</a> or <a className="hover-text-blue" href="https://github.com/Asif-Biswas/facebook-clone-backend" rel="noreferrer" title="https://github.com/Asif-Biswas/facebook-clone-backend" target="_blank">Click here (Backend code)</a></span>
                            
                        </p>
                    </div>




                    <div className='fix-project-width'>
                    <div className='border border-white pointer' style={{position:'relative', margin:'8px'}}>
                        <img className='hover-opacity-off opacity' style={{borderRadius:'5px'}} src={fbcln210519} alt='facebook-clone' width='100%'/>
                        <a href="fb-cln.herokuapp.com" target="_blank" title="Go to the site" rel="noreferrer"><h4 className='htdu border border-white hover-text-blue' style={{position:'absolute', top:'45%', left:'50%', transform: 'translate(-50%, -50%)', zIndex:'1', fontSize:'min(4vw,28px)', textAlign:'center', padding:'4px', minWidth:'130px'}}>Facebook Clone</h4></a>
                    </div>

                    <div className='border border-white pointer' style={{position:'relative', margin:'8px'}}>
                        <img className='hover-opacity-off opacity' style={{borderRadius:'5px'}} src={youtubecln210519} alt='youtube-clone' width='100%'/>
                        <a href="youtube-cln.herokuapp.com" target="_blank" title="Go to the site" rel="noreferrer"><h4 className='htdu border border-white' style={{position:'absolute', top:'50%', left:'45%', transform: 'translate(-50%, -50%)', zIndex:'1', fontSize:'min(4vw,28px)', textAlign:'center', padding:'4px', minWidth:'130px'}}>Youtube Clone</h4></a>
                    </div>
                </div>
                
                <div className='fix-project-width'>
                    <div className='border border-white pointer' style={{position:'relative', margin:'8px'}}>
                        <img className='hover-opacity-off opacity' style={{borderRadius:'5px'}} src={fbhome210519} alt='facebook-home-clone' width='100%'/>
                        <a href="fb-home.herokuapp.com" target="_blank" title="Go to the site" rel="noreferrer"><h4 className='htdu border border-white hover-text-blue' style={{position:'absolute', top:'45%', left:'50%', transform: 'translate(-50%, -50%)', zIndex:'1', fontSize:'min(4vw,28px)', textAlign:'center', minWidth:'130px', padding:'4px'}}>Facebook home Page Clone</h4></a>
                    </div>
                    <div className='border border-white pointer' style={{position:'relative', margin:'8px'}}>
                        <div style={{position:'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)',}}>
                            <Link to='/projects'><button className='button hover-white' style={{borderRadius:'5px', border:'dashed 2px white'}}>See all Projects</button></Link>
                        </div>
                    </div>
                </div>

                <div style={{borderLeft:'solid 2px blue', marginLeft:'8px'}}>
                    <h5 style={{paddingLeft:'8px'}}>Visit my <a className='hover-text-blue' href="https://github.com/Asif-Biswas" target="_blank" title="My Github Profile" rel="noopener noreferrer">Github Profile</a> to see all projects code.</h5>
                </div>
 */