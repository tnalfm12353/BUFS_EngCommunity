import React from 'react';
import styled from 'styled-components';

import CreatePostTem from '../component/forum_components/create/CreatePostTem.jsx';
import PostForm from '../component/forum_components/create/PostForm.jsx';
class CreatePost extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            content:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handlePressKey = this.handlePressKey.bind(this);
    }


    handlePressKey(e) {
        if (e.key === 'Enter') {
           
        }
    }

    handleChange(e) {
        this.setState({
            content: e.target.value
        });
    }


    render(){
        const {content} = this.state;
        const {
            handleChange,
            handlePressKey,

            } =this;
        return(
            <div>
                <CreatePostTem
                value={content}
                onChange={handleChange}
                onKeyPress={handlePressKey}
                />
            </div>
        );
    }

}

export default CreatePost;

const div = styled.div`
    width:100%
`