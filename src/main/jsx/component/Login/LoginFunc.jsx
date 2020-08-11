import React from 'react';
import styled from 'style-loader';

class LoginFunc extends React.Component {

    constructor(props){
        super(props);
        this.state={
            loginhandler: false,
            LogInComponent: false,
            SignUpComponent: false,
        }

        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleLogIn(e) {
        this.setState({
            loginhandler: true,
            LogInComponent:true,
            SignUpComponent:false,
        });
    }

    handleSignUp(e) {
        this.setState({
            loginhandler: true,
            LogInComponent:false,
            SignUpComponent:true,
        });
    }

    handleClose(){
        this.setState({
            loginhandler: false,
            LogInComponent:false,
            SignUpComponent:false,
        });
    }

    render(){
        const {LogInComponent, SignUpComponent,loginhandler} =this.state;
        const {handleClose, handleLogIn, handleSignUp} = this;
        return(
            <LoginDiv>
                <Sty_Button active={LogInComponent} onClick={handleLogIn}>Log In</Sty_Button>
                <Sty_Button active={SignUpComponent}onClick={handleSignUp}>Sign Up</Sty_Button>
                {
                    loginhandler? 
                        <LogIn
                            isLogIn ={LogInComponent}
                            isSignUp ={SignUpComponent}
                            onLogin = {handleLogIn}
                            onSignUp = {handleSignUp}
                            onClose={handleClose}
                        />
                    :null
                }
            </LoginDiv>
        );
    }
}