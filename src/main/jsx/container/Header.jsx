import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../../webapp/img/bufs.jpg';

import LogIn from './LogIn.jsx';
class Header extends React.Component {

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

    render() {
        const {LogInComponent, SignUpComponent,loginhandler} =this.state;
        const {handleClose, handleLogIn, handleSignUp} = this;
        return (
        <Container>
            <Link to="/"><LogoImg src={Logo} alt=""/></Link>
            <Empty/>
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
                    : null
                }
            </LoginDiv>
        </Container>
        );
    }
}
export default Header;


const Container = styled.div`
    width: 100%;
    // border: 1px solid #D941C5;
    display:inline-flex;
    align-items:center;
    justify-content:space-around;
`

const LogoImg = styled.img`
    height:3rem;
    float:right;
    margin:0 auto;
`
const Empty = styled.div`
    flex-grow:2;
    // border: 1px solid #D941C5;
    height:100%;
    width:10rem;
`

const LoginDiv = styled.div`
    // border: 1px solid #D94; 
    padding:1rem;
    align-self:auto;
    flex-grow:0;
    flex-shirink:0;
` 

//추후 애니메이션 넣기. 
const Sty_Button =styled.button` 
    border: 1px solid #C7CED5;
    background-color:white; 
    padding-left:5px;
    padding-right:5px;
    font-size: 10pt; 
    font-weight:bold;
    text-align:center;

    border-color: ${props=>props.active? '#ffca08':'#C7CED5'};
    color: ${props=>props.active? '#ffca08':'gray'};

    &:hover {
        border-color: #ffca08;
        background-color: white;
        color: #ffca08;
    }
    
`

const LoginContainer = styled.section`
    width:20rem;
    height:auto;


    border: 1px solid #ffca08;
`