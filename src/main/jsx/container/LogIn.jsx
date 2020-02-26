import React from 'react';
import styled from 'styled-components';

import SignInForm from '../component/Login/LogInForm.jsx';
import SignUpForm from '../component/Login/SignUpForm.jsx';
import axios from 'axios';
class LogIn extends React.Component{

    constructor(props){
        super(props)

        this.state={
            id:'',
            pw:'',
            checkPw:'',
            nickname:'',
            validID:false,
            validPW:false,
            validCP:false,
            isNickExist:false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.validation = this.validation.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.isNicknameExist = this.isNicknameExist.bind(this);
    }
    shouldComponentUpdate(nextProps,nextState){
        const {id,pw,checkPw,nickname} = this.state
        return id !== nextState.id || pw !== nextState.pw || checkPw !== nextState.checkPw || nickname !== nextState.nickname;
    }
    /* -------------------- input 값 받기 ------------------------------*/
    
    handleChange(e){
        this.setState({[e.target.name]:e.target.value},this.validation(e))
    }

    /* -------------------- Login Validation ------------------------------*/
    validation(e){
        const check=/^(?=.*[a-zA-Z])(?=.*[0-9]).{4,12}$/;
        const pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/;
        if([e.target.name] == "id"){
            if(check.test(e.target.value)){

                this.setState({
                    validID:true
                });
            }else{
                this.setState({
                    validID:false
                });
            }
            console.log(e.target.value);
        }

        if([e.target.name] == "pw"){
            if(pwCheck.test(e.target.value)){
                this.setState({
                    validPW:true
                });
            }else{
                this.setState({
                    validPW:false
                })
            }
        }
        
        if([e.target.name] == "checkPw"){
            if(e.target.value === this.state.pw){
                this.setState({
                    validCP:true
                });
            }else{
                this.setState({
                    validCP:false
                })
            }
        }


    }

    /* -------------------- DB function ------------------------------*/
    isNicknameExist(){
        const {nickname} = this.state;

        let nick = JSON.stringify({nickname:nickname });
        
        axios
            .post('/ValidNickname', nick, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            })
            .then(function (response) {
                this.setState({isNickExist: response});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

    }

    handleSignUp(){
        const {id,pw,nickname} = this.state;
        const {validID,validPW,validCP,isNickExist} =this.state;

        let user = JSON.stringify({id:id, pw:pw, nickname:nickname });
        if(validID||validPW||validCP||isNickExist){
            axios
                .post('/SignUp', user, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                })
                .then(function (response) {
                   if(response){
                       this.props.onClose();
                   }
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    render(){
        const {isLogIn,isSignUp,onLogin,onSignUp,onClose} = this.props;
        const {id,pw,nickname,validID,validPW,validCP,isNickExist} =this.state;
        const {handleChange,handleSignUp,isNicknameExist} = this;
        return(
            <React.Fragment>
                <Overlay onClick={()=>onClose()}>
                    <LoginTem onClick={(e)=>e.stopPropagation()}>
                        <Title>
                            <TitleItem isLogIn = {isLogIn} onClick={(e)=>{e.stopPropagation();onLogin()}}>Log-In</TitleItem>
                            <TitleItem isLogIn = {isSignUp} onClick={(e)=>{e.stopPropagation();onSignUp()}}>Sign-Up</TitleItem>
                        </Title>
                        <Content>
                            {isLogIn?
                            <SignInForm
                                onClose = {onClose}
                                id={id}
                                pw={pw}

                                onChange = {handleChange}
                            />
                            :
                            <SignUpForm
                                onClose = {onClose}

                                id={id}
                                pw={pw}
                                nickname={nickname}
                                validID ={validID}
                                validPW ={validPW}
                                validCP ={validCP}
                                isNickExist={isNickExist}

                                validation = {isNicknameExist}
                                onChange ={handleChange}
                                signUp = {handleSignUp}
                            />
                            }
                        </Content>
                    </LoginTem>
                </Overlay>
            </React.Fragment>
        );
    }

}

export default LogIn;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.16);
`

const LoginTem = styled.main`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25rem;
    height:auto;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
`
const Title = styled.div`
    display:flex;
    width:100%;
`
const TitleItem = styled.div`
    width:50%;
    height:auto;
    padding:1rem;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: ${props=>props.isLogIn?'#ffca08':'gray'};
    border-bottom: ${props=>props.isLogIn?'1px solid #ffca08':null};

    transition: all .5s;

    ${props=>props.isLogIn?null:"&:hover{transform:scale(1.3);}"};
`

const Content = styled.section`
    border:none;
    margin-top: 1rem;
`
