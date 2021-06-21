import React, { Component } from 'react';
//import fbh from '../images/fbh.jpg';
import fb from '../images/fb.jpg';
import yth from '../images/yth.jpg';
import orangered from '../images/orangered.jpg';

class FeaturedProject extends Component {
    render() {
        return (
            <div className='project-margin'>
                
                <br/><br/>
                <div className='project-item' style={{position:'relative'}}>
                    <div style={{}}>
                        <img style={{}} src={fb} alt='fbd' width='100%'/>
                    </div>
                    <div className='item-details-l' style={{textAlign:'center'}}>
                        <br/>
                        <h3 className='text-blue' style={{fontSize:'min(6vw,36px)'}}><span>Facebook clone</span></h3>
                        <p className='' style={{textAlign:'justify', color:'rgb(0,120,255)'}}>In this project, I've used <b>Django </b>(django-rest-framework) for back-end and <b>Reactjs</b> for front-end. Here, you can do almost all the common things of Facebook.
                         Like, You can <b>Post</b>, <b>Like</b>, <b>Comment</b>, <b>Accept/Delete/Add friend request</b>, <b>Create Group</b>, <b>send/receive Messages</b>, <b>get Notification</b>, <b>Search</b>, <b>Change Name/Password</b>,
                          <b> Login/Logout</b>, etc. Visit the site now (use (username: elon, Password: elon1234), if you don't want to create an account😎)</p>
                        <br/>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <a style={{textDecoration:'none'}} href="https://github.com/Asif-Biswas/facebook-clone-backend" rel="noreferrer" title="https://github.com/Asif-Biswas/facebook-clone-backend" target="_blank"><span style={{borderRadius:'50px', padding:'16px 36px', minWidth:'140px', textAlign:'center', color:'rgb(0,120,255)'}} className='margin border border-blue hover-blue hover-shadow pointer'>Github</span></a>
                            <a style={{textDecoration:'none'}} href="https://fb-cln.herokuapp.com" target="_blank" title="fb-cln.herokuapp.com" rel="noreferrer"><span style={{borderRadius:'50px', padding:'16px 36px', minWidth:'140px', textAlign:'center', color:'rgb(0,120,255)'}} className='margin border border-blue hover-blue hover-shadow pointer'>Visit site</span></a>
                        </div>
                    </div>
                </div>

                <hr/>
                <br/>
                <div className='project-item2'>
                    <div style={{float:'right'}}>
                        <img style={{}} src={yth} alt='yth' width='100%'/>
                    </div>

                    <div className='item-details-r' style={{textAlign:'center'}}>
                        <br/>
                        <h3 className='text-blue' style={{fontSize:'min(6vw,36px)'}}><span>Youtube clone</span></h3>
                        <p className='' style={{textAlign:'justify', color:'rgb(0,120,255)'}}>Here, <b>Django</b> is used for Backend and HTML, CSS and <b>Javascript</b> is used for front-end design. Seeing my own design, I was surprised. Nothing to say anymore. Please, Visit the site and see what I've made.</p>
                        <br/>
                        <div style={{display:'flex', justifyContent:'center', paddingBottom:'8px'}}>
                            <a style={{textDecoration:'none'}} href="https://github.com/Asif-Biswas/youtube-clone" rel="noreferrer" title="https://github.com/Asif-Biswas/youtube-clone" target="_blank"><span style={{borderRadius:'50px', padding:'16px 36px', minWidth:'140px', textAlign:'center', color:'rgb(0,120,255)'}} className='margin border border-blue hover-blue hover-shadow pointer'>Github</span></a>
                            <a style={{textDecoration:'none'}} href="https://youtube-cln.herokuapp.com" target="_blank" title="youtube-cln.herokuapp.com" rel="noreferrer"><span style={{borderRadius:'50px', padding:'16px 36px', minWidth:'140px', textAlign:'center', color:'rgb(0,120,255)'}} className='margin border border-blue hover-blue hover-shadow pointer'>Visit site</span></a>
                        </div>
                    </div>
                </div>

                <hr/>
                <br/>

                <div className='project-item' style={{position:'relative'}}>
                    <div style={{}}>
                        <img style={{}} src={orangered} alt='fbd' width='100%'/>
                    </div>
                    <div className='item-details-l' style={{textAlign:'center'}}>
                        <br/>
                        <h3 className='text-blue' style={{fontSize:'min(6vw,36px)'}}><span>OrangeRed (e-commerce)</span></h3>
                        <p className='' style={{textAlign:'justify', color:'rgb(0,120,255)'}}>I believe, the design of this project is not bad. But, to be honest, this project is not perfect. There are some bug🤭  and I need minimum 10 hours to fix them🧐. But the main question is, will you find the bug? Visit the site now and buy some product for free🤑. [use (username: elon, Password: elon1234), if you don't want to create an account]</p>
                        <br/>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <a style={{textDecoration:'none'}} href="https://github.com/Asif-Biswas/orangered-e-commerce-frontend" rel="noreferrer" title="https://github.com/Asif-Biswas/orangered-e-commerce-frontend" target="_blank"><span style={{borderRadius:'50px', padding:'16px 36px', minWidth:'140px', textAlign:'center', color:'rgb(0,120,255)'}} className='margin border border-blue hover-blue hover-shadow pointer'>Github</span></a>
                            <a style={{textDecoration:'none'}} href="https://orangered.herokuapp.com" target="_blank" title="fb-cln.herokuapp.com" rel="noreferrer"><span style={{borderRadius:'50px', padding:'16px 36px', minWidth:'140px', textAlign:'center', color:'rgb(0,120,255)'}} className='margin border border-blue hover-blue hover-shadow pointer'>Visit site</span></a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default FeaturedProject;