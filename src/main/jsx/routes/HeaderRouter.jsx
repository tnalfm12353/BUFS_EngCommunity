import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../component/Home.jsx';
import About from '../component/About.jsx';
import NotFound from '../component/NotFound.jsx';
import Navi from '../container/Navi.jsx';
import Header from '../container/Header.jsx';
import Forum from '../container/Forum.jsx';
import Schedule from '../container/Schedule.jsx';
const HeaderRouter = ()=>{
    
       return (
            <Router>
                <Header/>
                <Navi/>
                <div>
                    <Switch>
                        <Route exact path = "/" component={Home}/>
                        <Route path = "/About" component={About}/>
                        <Route path="/forum" component={Forum}/>
                        <Route path="/Schedule" component={Schedule}/>
                        <Route component ={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    
}

export default HeaderRouter;