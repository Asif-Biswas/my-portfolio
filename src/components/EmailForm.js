import React, { Component } from 'react';

class EmailForm extends Component {
    constructor() {
        super()
        this.state={
            href: '',
            subject:'',
            body:'',
        }
    }
    sendMail=()=>{
        this.setState({href: 'mailto:asifbiswas85@gmail.com?subject='+this.state.subject+'&body='+this.state.body})
    }

    inputSubject=(e)=>{
        this.setState({subject: e.target.value})
    }

    inputBody=(e)=>{
        this.setState({body: e.target.value})
    }
    render() {
        return (
            <div className='padding'>
                <input type='text' placeholder='Your Name' className='email-form' style={{width:'100%', height:'50px', paddingLeft:'8px', color:'white', fontSize:'24px'}}/>
                <br/><br/>
                <input type='email' placeholder='Your Email Address' className='email-form' style={{width:'100%', height:'50px', paddingLeft:'8px', fontSize:'24px', color:'white'}}/>
                <br/><br/>
                <input onChange={this.inputSubject} type='text' placeholder='Subject' className='email-form' style={{width:'100%', height:'50px', paddingLeft:'8px', fontSize:'24px', color:'white'}}/>
                <br/><br/>
                <textarea onChange={this.inputBody} placeholder="Type your message here...." className='email-form' style={{width:'100%', height:'140px', paddingLeft:'8px', fontSize:'24px', color:'white'}} required></textarea>
                <br/><br/>
                
                <a onClick={this.sendMail} href={this.state.href} style={{textDecoration:'none'}}><button style={{width:'100%'}} className='button light-blue round'>Send Message</button></a>
            </div>
        );
    }
}

export default EmailForm;