import React from 'react';
import styled from 'styled-components';

const TodoListTemplate = ({form, children, palette}) =>{
    return(
        <TodoTemplate>
           <Title>
                 What should I do?
                <PaletteWrapper>
                    {palette}
                </PaletteWrapper>
           </Title>
            <FormWrapper>
                {form}
            </FormWrapper>
            <TodosWrapper>
                {children}
            </TodosWrapper>
        </TodoTemplate>

    );
}

export default TodoListTemplate;

const TodoTemplate = styled.main`
background: white;
width: 25rem;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
margin: 0 auto;
margin-top: 4rem;
`

const Title = styled.div`
    @import url(https://fonts.googleapis.com/css?family=Dancing+Script:600&display=swap);
    padding: 2rem;
    font-family: 'Dancing Script', sans-serif;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 100;
    background: #ffca08;
    color: white;

    transition: all .5s;

    &:hover{
        background:#636466;
    }
`

const FormWrapper = styled.section`
    padding: 1rem;
    border-bottom: 1px solid #ffca08;
`

const TodosWrapper = styled.section`
    min-height: 5rem;
`

const PaletteWrapper = styled.section`
    opacity: 0;
    background: #ffca08;
    
    transition: all .5s;

    ${Title}:hover &{
        opacity:1;
        background:#636466;
      }
`