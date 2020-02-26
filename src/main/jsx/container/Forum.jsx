import React from 'react';
import CreatePost from './CreatePost.jsx';
import styled from 'styled-components';
class Forum extends React.Component{

    render(){
        return(
            <div>
                <CreatePost/>
            </div>
        );
    }

}

export default Forum;

const div = styled.div`
    width:100%
`