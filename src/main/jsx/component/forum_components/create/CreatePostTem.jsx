import React from 'react';
import styled from'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

const CreatePostTem=({vaule,onChange,onKeyPress})=> {
    return(
        <CreateMain>
            <InputWrapper>
                <ContentArea rows={2} vaule={vaule} onChange={onChange} onKeyPress={onKeyPress}/>
                {/* <Header>Create post</Header> */}
            </InputWrapper>
            <EtcWrapper>
                여기에 이미지 등등
            </EtcWrapper>
        </CreateMain>
    );
}

export default CreatePostTem;

const CreateMain = styled.main`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width: 50rem;
    height: auto;
    border: 1px solid gray;
    border-radius: 1rem;

`
const InputWrapper = styled.section`
    height:auto;
    margin-top:1rem;
    width:100%;
    border:1px solid gray;

`

const Header = styled.div`
    position:absolute;
    top:40%;
    left:40%;
    transform:translate(-50%,-50%);
    transform:scale(2);

    transition: all .5s;
`

const ContentArea = styled(TextareaAutosize)`
    width:95%;
    margin:1rem;
    
    font-size:1.25rem;
    resize:none;
    overflow:hidden;
    outline:none;
    border:none;
`

const EtcWrapper = styled.section`
    border:1px solid red;

`
