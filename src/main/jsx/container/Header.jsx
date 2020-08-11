import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../../webapp/img/bufs.jpg';

import Authentic from './Authentic.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/modules/LoginUser';

import {Navi} from './';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state={
          
        }

    }
    
    render() {
        const sessionExist = this.props.sessionExist;
        const {nickname} = this.props.userInfo.toJS();
        return (
        <HeaderContainer>
            <Empty>
                <SubNavi>
                    <SubNaviSpan></SubNaviSpan>
                    <SubNaviSpan></SubNaviSpan>
                    <SubNaviSpan></SubNaviSpan>
                </SubNavi>
            </Empty>
            <Link to="/"><LogoImg src={Logo} alt=""/></Link>
            <HeaderNavi/>
            {sessionExist?
                <p>{nickname}님 환영합니다.</p> //추후 회원 정보 수정,탈퇴 등등 component 생성하자.
                :
                <Authentic/>
            }
        </HeaderContainer>
        );
    }
}



const HeaderContainer = styled.div`
    display:flex;
    position:absolute;
    background: rgba(255,255,255,0.1);
    backdrop-filter: saturate(180%) blur(3px);
    height:50px;
    width: 100%;
    align-items:center;
    justify-content:space-between;
    z-index:10;
`

const Empty = styled.div`
    display: none;
    @media only screen and (max-width: 767px){
        display : block;
        top: 0;
        left: 0;
        width: 45px;
        height: 50px;
    }

`
const SubNavi = styled.div`
    display: none;
    
    @media only screen and (max-width: 767px){
        display : inline;
        position: absolute;
        top: 1.2vh;
        left: 1.6vw;
        padding-bottom: 2vh;
        z-index:6;
   }
`
const SubNaviSpan = styled.span`
    height: 2px;
    width: 30px;
    background-color: #636466;
    display: block;
    margin: 5px 0px 8.5px 0px;
    transition: 0.7s ease-in-out;
    transform: none;
`

const LogoImg = styled.img`
    width: 210px;
    height: 50px;

    @media only screen and (max-width: 767px){
        width : 160px;
        height: 40px;
        margin:0 auto;

   }
`
const HeaderNavi = styled(Navi)`
`

export default connect(
    (state) =>({
        userInfo : state.LoginUser.get('userInfo'),
        sessionExist : state.LoginUser.get('sessionExist'),
    }),
    (dispatch)=>({
        UserActions: bindActionCreators(userActions,dispatch)
    })
)(Header);