import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Navi extends React.Component {
    render() {
        return (
            <Nav>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/About">About</NavItem>
                <NavItem to="/Community">Community</NavItem>
                <NavItem to="/Schedule">Schedule</NavItem>
            </Nav>
        );
    }
}

export default Navi;
const Nav = styled.div `
   background: rgba(255, 255, 255, 0);
   display:flex;
   justify-content: space-around;
   width: 50vw;
   @media only screen and (max-width: 767px){
        display:none;
   }
`
const NavItem = styled(Link)`
    background: rgba(255, 255, 255, 0);
    text-align: center;
    text-decoration: none;
    padding: 1rem; 
    display:inline-block;
    color: #636466;
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
    font-family: 'Caveat', cursive;
    font-size: 1.5rem;
    transition: all 1s;

    &:hover{
        transform:scale(1.3);
        transition: all 0.5s ease-in-out;
        color: #ffca08;   
    }

    @media only screen and (max-width: 900px){
        font-size:1rem;
   }
    
`