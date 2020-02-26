import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
const PostForm = ({value,onChange,onKeyPress}) =>{
    
    return(
        <PostFormDiv>
            <ContentArea value={value} onChange={onChange} onKeyPress={onKeyPress}/>
        </PostFormDiv>
    );
}

export default PostForm;

const PostFormDiv = styled.div`
    display: flex;
    height:100%;
`

const ContentArea = styled(TextareaAutosize)`
    flex:1;
    font-size:1rem;
    resize:none;
    overflow:hidden;
    outline:none;
    border: none;
`