import React from 'react';
import styled from 'styled-components';
import debounce from 'debounce';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/modules/LoginUser';

import SignInForm from '../component/Login/LogInForm.jsx';
import SignUpForm from '../component/Login/SignUpForm.jsx';
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
            validNick:false,
            isIdExist:false,
            isNickExist:false,

            idErrorMSG:'4~12자 이상 영어+숫자',
            nickErrorMSG:'특수문자를 제외한 2~10자',
        }

        this.handleChange = this.handleChange.bind(this);
        this.validation = this.validation.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        /* db delay */
        this.isExist = debounce(this.isExist,300);
    }
  

    /* -------------------- input 값 받기 ------------------------------*/
    handleChange(e){
        this.setState({[e.target.name]:e.target.value},this.validation(e))
    }

    /* -------------------- Validation ------------------------------*/
        validation(e) {
        const isSignUp = this.props;
        console.log(isSignUp);
        const check = /^(?=.*[a-zA-Z]).{4,12}$/;
        const pwCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/;
        const nickCheck = /^[가-힣|a-z|A-Z|0-9].{1,10}$/;
        const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;
        switch(e.target.name){
            case "id":
                if (check.test(e.target.value) && !regExp.test(e.target.value)) {
                    this.setState({validID: true});
                    //왜 안대지? 추후 고치자
                    isSignUp===true ? this.isExist(e.target.name, e.target.value):null;
                } else {
                    this.setState({validID: false, isIdExist: false, idErrorMSG: "특수문자를 제외한 4~12자"});
                }break;
            case "pw":
                if (pwCheck.test(e.target.value)) {
                    this.setState({validPW: true});
                } else {
                    this.setState({validPW: false});
                }break;
            case "checkPw":
                if (e.target.value === this.state.pw) {
                    this.setState({validCP: true});
                } else {
                    this.setState({validCP: false});
                }break;
            case 'nickname':
                if (nickCheck.test(e.target.value) && !regExp.test(e.target.value)) {
                    this.setState({validNick: true});
                    this.isExist(e.target.name, e.target.value);
                } else {
                    this.setState(
                        {validNick: false, isNickExist: false, nickErrorMSG: "특수문자를 제외한 2~10자"}
                    );
                }break;
            default:
                console.log("어캐 default로 올수 있죠???????????");
        }
    }
    /* -------------------- Error Message ------------------------------*/
    nicknameErrorMSG(data){
        if(!data){
            this.setState({nickErrorMSG:"중복된 닉네임 입니다!"});
        }else{
            this.setState({nickErrorMSG:''});
        }

    }

    idErrorMSG(data){
        if(!data){
            this.setState({idErrorMSG:"중복된 아이디 입니다!"});
        }else{
            this.setState({idErrorMSG:''});
        }
    }

    /* -------------------- DB function ------------------------------*/
    isExist(name,exist){
        console.log("isExist");
        let data = JSON.stringify({ being:exist});
        const mappingValue = '/Valid'+name;

        axios
            .post(mappingValue, data, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            })
            .then(function (response) {
                if(name === "id"){
                    this.setState({isIdExist: response.data},this.idErrorMSG(response.data));
                }else if(name === "nickname"){
                    this.setState({isNickExist: response.data},this.nicknameErrorMSG(response.data));
                }
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

    }

    handleSignUp(){
        const {id,pw,nickname} = this.state;
        const {isIdExist,validPW,validCP,isNickExist} =this.state;

        let user = JSON.stringify({id:id, pw:pw, nickname:nickname });
        if(isIdExist&&validPW&&validCP&&isNickExist){
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

    handleLogin(){
        const { UserActions } = this.props;
        const {id,pw,validPW,validID} =this.state;
        let login = JSON.stringify({id:id,pw:pw});
        
        if(validID&&validPW){
            axios
                .post('/Login',login,{
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                })
                .then(function (response) {
                    if(response){
                        UserActions.setLoginInfo(response.data);
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
        const {id,pw,nickname,validPW,validCP,isIdExist,isNickExist,nickErrorMSG,idErrorMSG} =this.state;
        const {handleChange,handleSignUp,handleLogin} = this;
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
                                id={id}
                                pw={pw}
                                
                                LogIn = {handleLogin}
                                onChange = {handleChange}
                            />
                            :
                            <SignUpForm
                                id={id}
                                pw={pw}
                                nickname={nickname}
                                /*validation*/
                                validPW ={validPW}
                                validCP ={validCP}
                                isIdExist ={isIdExist}
                                isNickExist={isNickExist}

                                idErrorMSG = {idErrorMSG}
                                nickErrorMSG = {nickErrorMSG}
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

export default connect(
    (state) =>({
    }),
    (dispatch)=>({
        UserActions: bindActionCreators(userActions,dispatch),
    })
)(LogIn);

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.16);
`

const LoginTem = styled.main`

    display:flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 21rem;
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
