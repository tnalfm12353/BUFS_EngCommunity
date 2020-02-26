import React from 'react';
import styled from 'styled-components';

const SignUpForm = ({id,pw,checkPw,nickname,
                    validID,validPW,validCP,isNickExist,
                    onChange,validation,signUp,onClose}) =>{
    return(
        <LoginDiv>
            <GroupDiv onClick={(e)=>e.stopPropagation()}>
                <Input name="id" value={id} onChange={onChange} required="required" /*onBlur={validation}*//>
                <Label>ID</Label>
                <CheckedMark valid={validID}>{validID?"✓":"×"}</CheckedMark>
                {validID?null:<Span>4~12자 이상 영어+숫자</Span>}
            </GroupDiv>
            <GroupDiv onClick={(e)=>e.stopPropagation()}>
                <Input type='password' name="pw"value={pw} onChange={onChange} required="required" /*onBlur={validation}*//>
                <Label>Password</Label>
                <CheckedMark valid={validPW}>{validPW?"✓":"×"}</CheckedMark>
                {validPW?null:<Span>6~16자 영어+숫자+특수문자</Span>}
            </GroupDiv>

            <GroupDiv onClick={(e)=>e.stopPropagation()}>
                <Input type='password' name="checkPw"value={checkPw} onChange={onChange}required="required"/*onBlur={validation}*//>
                <Label>Confirm Password</Label>
                <CheckedMark valid={validCP}>{validCP?"✓":"×"}</CheckedMark>
            </GroupDiv>

            <GroupDiv onClick={(e)=>e.stopPropagation()}>
                <Input name="nickname" value={nickname} onChange={onChange} required="required" onBlur={validation} />
                <Label>Nickname</Label>
                <CheckedMark valid={isNickExist}>{isNickExist?"✓":"×"}</CheckedMark>
            </GroupDiv>
            <LoginBtn onClick={()=>{signUp()}}>Sign Up</LoginBtn>
        </LoginDiv>
    );
}
export default SignUpForm;

const LoginDiv = styled.div`
    display:flex;
    flex-direction:column;
    flex:auto
`
const GroupDiv = styled.div`
    flex-direction:row;
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
const CheckedMark = styled.div`
    position:absolute;
    top:2rem;
    left:20rem;
    font-size: 1.5rem;
    line-height: 1rem;
    margin-left: 1rem;
    font-weight: 800;

    color:${props=>props.valid?"#ffca08":"#e64980"};
    opacity:0;

    ${Input}:focus ~ & , ${Input}:valid ~ &{
        opacity: 1;
    }
`

const Span =styled.span`
    margin-left:1.5rem;
    font-weight:bold;
    opacity:.5;
    color:#999;

`