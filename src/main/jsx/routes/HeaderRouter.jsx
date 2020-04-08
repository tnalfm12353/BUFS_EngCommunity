import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Home, About, NotFound, Forum, Schedule} from './pages';
import {Navi} from '../container'
import Header from '../container/Header.jsx';

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