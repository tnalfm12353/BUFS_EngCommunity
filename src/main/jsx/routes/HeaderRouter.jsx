import React from 'react';
import styled from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home, About, NotFound, Community, Schedule} from './pages';

import Header from '../container/Header.jsx';

const HeaderRouter = ()=>{
    
       return (
            <Router>
                <Header/>
                <WebPages>
                    <Switch>
                        <Route exact path = "/" component={Home}/>
                        <Route path = "/About" component={About}/>
                        <Route path="/Community" component={Community}/>
                        <Route path="/Schedule" component={Schedule}/>
                        <Route component ={NotFound}/>
                    </Switch>
                </WebPages>
            </Router>
        );
    
}

export default HeaderRouter;

const WebPages = styled.div`
    padding-top:60px;
`