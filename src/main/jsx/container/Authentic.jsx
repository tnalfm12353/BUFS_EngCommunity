import React from 'react';
import styled from 'styled-components';

import LogIn from './subContainers/LogIn.jsx';


class Authentic extends React.Component{

    constructor(props){
        super(props)
        this.state={
            loginHandler: false,
            logInComponent: false,
            signUpComponent: false,
        }


        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleClose = this.handleClose.bind(this);

 
    }

    handleLogIn(e) {
        this.setState({
            loginHandler: true,
            logInComponent:true,
            signUpComponent:false,
        });
    }

    handleSignUp(e) {
        this.setState({
            loginHandler: true,
            logInComponent:false,
            signUpComponent:true,
        });
    }

    handleClose(){
        this.setState({
            loginHandler: false,
            logInComponent:false,
            signUpComponent:false,
        });
    }

    render(){
        
        const {logInComponent, signUpComponent,loginHandler} =this.state;
        const {handleClose, handleLogIn, handleSignUp} = this;
        return(

            <LoginDiv>
                <Sty_Button active={logInComponent} onClick={handleLogIn}>Log In</Sty_Button>
                <Sty_Button active={signUpComponent}onClick={handleSignUp}>Sign Up</Sty_Button>
                { 
                    loginHandler? 
                        <LogIn
                            isLogIn ={logInComponent}
                            isSignUp ={signUpComponent}
                            onLogin = {handleLogIn}
                            onSignUp = {handleSignUp}
                            onClose={handleClose}
                        />
                    : null
                }
            </LoginDiv>
        );
    }

}

const LoginDiv = styled.div`
    // border: 1px solid #D94; 
    padding:1rem;
    align-self:auto;
` 

//추후 애니메이션 넣기. 
const Sty_Button =styled.button` 
    border: 0px solid ;
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
    font-family: 'Caveat', cursive;
    
    background-color: rgba(255,255,255,0);
    padding: .3em .6em;
    font-size: 1.5rem;
    text-align:center;
    transition: all .5s;
    border-bottom:1px solid ${props=>props.active? '#ffca08':'rgba(255,255,255,0)'};
    color: ${props=>props.active? '#ffca08':'gray'};

    &:focus{
        outline:none;
    }
    &:hover {
        border-color: #ffca08;
        color: #ffca08;
    }
    
    @media only screen and (max-width: 900px){
        font-size: min(.8rem);

   }
`

const LoginContainer = styled.section`
    width:20rem;
    height:auto;


    border: 1px solid #ffca08;
`
export default Authentic;