import React from 'react';
import styled from 'styled-components';

const Form = ({value,onChange,onCreate,onKeyPress,color}) => {
    return(
        <FormDiv>
            <Input value={value} onChange={onChange} onKeyPress={onKeyPress} color={color}/>
            <CreateButton onClick={onCreate}>
                추가
            </CreateButton>
        </FormDiv>
    );

}

export default Form;

const FormDiv = styled.div`
    display:flex;
    
    ${CreateButton}:hover & ${Input}{
        border-bottom: 1px solid #636466;
    }
`

const Input = styled.input`
    flex: 1; // 버튼을 뺀 빈 공간을 모두 채워줌
    font-size: 1.25rem;
    outline:none;
    border: none;
    border-bottom: 1px solid #ffe373;
    color:${props => props.color};
`

const CreateButton = styled.div`
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: 1rem;

    background: #ffca08;
    border-radius: 3px;
    color: white;
    font-weight: 600;
    cursor:pointer;
    transition: all .5s;

    &:hover{
        background: #636466;
    }

`

