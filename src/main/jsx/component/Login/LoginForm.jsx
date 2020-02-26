import React from 'react';
import styled from 'styled-components';

const LoginForm = ({id,pw ,onChange}) =>{
    return(
        <LoginDiv>
            <GroupDiv onClick={(e)=>e.stopPropagation()}>
                <Input name="id" value={id} onChange={onChange} required="required"/>
                <Label>ID</Label>
            </GroupDiv>
            <GroupDiv onClick={(e)=>e.stopPropagation()}>
                <Input type='password' name="pw" value={pw} onChange={onChange}required="required"/>
                <Label>Password</Label>
            </GroupDiv>
            <LoginBtn >Log In</LoginBtn>
        </LoginDiv>
    );
}

export default LoginForm;

const LoginDiv = styled.div`
    display:flex;
    flex-direction:column;
    flex:auto
`
const GroupDiv = styled.div`
    position:relative;
    margin-bottom:2rem;
`
const Input = styled.input`
    font-size:1.5rem;
    margin:1rem;
    padding:10px 10px 10px 5px;
    display:block;
    width:85%;
    border:none;
    border-bottom:1px solid #999;

    &:focus , &:valid{
        outline:none;
        border-bottom:1px solid #ffca08;
    }
`

const Label = styled.label`
    color:#999; 
    font-size:1.5rem;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    top:25px;
    left: 2rem; 
    transition:0.5s all; 
    -moz-transition:0.5s all; 
    -webkit-transition:0.5s all; 

    ${Input}:focus ~ & , ${Input}:valid ~ &{
        top:0px;
        left:20px;
        font-size:1rem;
        opacity: 0.7;
        color:#ffca08;
    }

`

const LoginBtn = styled.div`
    font-size :2rem;
    text-align: center;
    font-weight:bold;
    color:gray;
    width:80%;
    margin:0 auto;
    margin-bottom:2rem;    
    border: 1px solid gray;
    
    transition:all 0.5s;
    &:hover{
        color:#ffca08;
        border:1px solid #ffca08;
    }
`