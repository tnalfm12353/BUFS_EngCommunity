import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Navi extends React.Component {
    render() {
        return (
            <Nav>
                <NavItem to="/About">About</NavItem>
                <NavItem to="/Schedule">Schedule</NavItem>
                <NavItem to="/forum">Community</NavItem>
                <NavItem to="/">Test</NavItem>
            </Nav>
        );
    }
}

export default Navi;
const Nav = styled.div `
   background: #00ff0000;
   display:flex;
   width: 100%;
   border-bottom:1px solid gray;
`
const NavItem = styled(Link)`
    background: #00ff0000;
    text-align: center;
    text-decoration: none;
    padding: 1rem; 
    display:inline-block;
    color: gray;
    font-size: 1.5rem;
    
    transition: all 1s;

    &:hover{
        transform:scale(1.3);
        color: #ffca08;   
    }
`