import React, { Component } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import EmailForm from './EmailForm';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className='contact'>
                    <div>
                        <h3 className='text-light-blue'>Have a project you'd like to discuss?<br/>Feel free to contact me. Literally I'm seeking a chance to work with great people.😇 Write me a message:</h3>
                        <EmailForm/>
                    </div>
                    <div className='text-light-blue social'>
                        
                        <div style={{paddingLeft:'50px', paddingTop:'16px'}}>
                            <a href="https://github.com/Asif-Biswas" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}><p className='hover-text-white pointer' style={{minWidth:'300px'}}><FaGithub style={{fontSize:'min(8vw,36px)', marginRight:'16px', marginBottom:'-4px'}}/> <span style={{fontSize:'min(5vw,28px)'}}>GITHUB</span></p></a>
                            <a href="mailto:asifbiswas85@gmail.com" style={{textDecoration:'none'}}><p className='hover-text-white pointer' style={{minWidth:'300px'}}><AiOutlineMail style={{fontSize:'min(8vw,36px)', marginRight:'16px', marginBottom:'-8px'}}/> <span style={{fontSize:'min(5vw,28px)'}}>EMAIL</span></p></a>
                            <a href="https://www.linkedin.com/in/asif-biswas-8131431ab/" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}><p className='hover-text-white pointer' style={{minWidth:'300px'}}><FaLinkedin style={{fontSize:'min(8vw,36px)', marginRight:'16px', marginBottom:'-8px'}}/> <span style={{fontSize:'min(5vw,28px)'}}>LINKEDIN</span></p></a>
                            <p className='hover-text-white pointer' style={{minWidth:'300px'}}><FaFacebook style={{fontSize:'min(8vw,36px)', marginRight:'16px', marginBottom:'-8px'}}/> <span style={{fontSize:'min(5vw,28px)'}}>FACEBOOK</span></p>
                            <a href="https://www.instagram.com/asif.biswas/" target="_blank" rel="noreferrer" style={{textDecoration:'none'}}><p className='hover-text-white pointer' style={{minWidth:'300px'}}><FaInstagram style={{fontSize:'min(8vw,36px)', marginRight:'16px', marginBottom:'-8px'}}/> <span style={{fontSize:'min(5vw,28px)'}}>INSTAGRAM</span></p></a>
                            <p className='hover-text-white pointer' style={{minWidth:'300px'}}><FaTwitter style={{fontSize:'min(8vw,36px)', marginRight:'16px', marginBottom:'-8px'}}/> <span style={{fontSize:'min(5vw,28px)'}}>TWITTER</span></p>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <hr/>
                <p style={{textAlign:'center', color:'white', opacity:'.6'}}>Designed & Built by Asif</p>
                <br/>
            </div>
        );
    }
}

export default Footer;