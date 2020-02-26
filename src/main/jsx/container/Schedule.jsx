import React from 'react';
import styled from 'styled-components';

import TodoList from './TodoList.jsx';
class Schedule extends React.Component{

    render(){
        return(
            <div>
                <TodoList/>
            </div>
        );

    }
}

export default Schedule;