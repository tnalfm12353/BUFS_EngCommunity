import React from 'react';
import styled from 'styled-components';


const Color = ({color, active ,onClick}) =>{
    return (
       <StyColor active={active} style={{background:color}} onClick={onClick}></StyColor>
    );
}

const Palette = ({colors, selected , onSelect })=>{
    const colorList = colors.map(
            (color) => (<Color color={color} active={selected===color} onClick={() => onSelect(color)} key={color}/>)
        );

    return(
        <StyPalette>
            {colorList}
        </StyPalette>
    );
};

const StyPalette = styled.div`
    display : flex;
    justify-content: center;
   
`

const StyColor = styled.div`
    width: 2rem;
    height: 2rem;
    opacity: ${props=>props.active?"1":".25"};
    transition: all 0.2s;
    cursor: pointer;

    &:hover{
        opacity: 0.5;
    }
`
export default Palette;