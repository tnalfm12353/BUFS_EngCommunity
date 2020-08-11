import React from 'react';
import styled from 'styled-components';

const InputForm =()=>{

    return(
        <InputFormContainer>
            <TitleInput/>
        </InputFormContainer>
    );

}

export default InputForm;

const InputFormContainer = styled.div`
    display:flex;
    flex-direct: column;
    width: 100%;
`
const TitleInput = styled.input`
    
    font-size: 1.25rem;
    outline:none;
    border: none;
    
`