import React from 'react';
import styled from 'styled-components';

import PostIcon from '../../webapp/img/pencil_icon.png';

import CreatePostTem from '../component/forum_components/create/CreatePostTem.jsx';
import PostForm from '../component/forum_components/create/PostForm.jsx';
import { Community } from '../routes/pages/index.js';
class CommunityCTN extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            iconImage: null,
            callCreatePost:false,
            content:''
        }

        this.canvasIconRef = React.createRef();
        this.ctx = null;

        this.closeCreatePost = this.closeCreatePost.bind(this);
    }
    componentDidMount(){
        this.ctx = this.canvasIconRef.current.getContext('2d');
        // this.ctx.arc(32,32,32,0, Math.PI*2 ,false);
        // this.ctx.fillStyle ="rgba(99,100,102,0.3)";
        // this.ctx.fill();
        this.loadIconImage();
    }

    loadIconImage(){
        this.iconImage = new window.Image();
        this.iconImage.src = PostIcon;
        this.iconImage.addEventListener('load',()=>{
            this.ctx.drawImage(this.iconImage,0,0,64,64);
        });
    }

    callCreatePost(){
        this.setState({
           callCreatePost:true
        });
    }
    closeCreatePost(){
        this.setState({
            callCreatePost:false
        });
    }
    
    // handlePressKey(e) {
    //     if (e.key === 'Enter') {
           
    //     }
    // }

    // handleChange(e) {
    //     this.setState({
    //         content: e.target.value
    //     });
    // }


    render(){
        const {callCreatePost,content} = this.state;
        
        return(
            <CommunityContainer>
                <CommunityNavi></CommunityNavi>
                <CommunityContent>
                    <CreatePostIcon ref={this.canvasIconRef} width="64" height="64"  onClick={()=>{this.callCreatePost()}}></CreatePostIcon>
                </CommunityContent>
                <CommunityTemp></CommunityTemp>
                {
                    callCreatePost?
                    <CreatePostTem
                        onClose={this.closeCreatePost}
                    />
                    : null
                }
            </CommunityContainer>
        );
    }

}

export default CommunityCTN;

const CommunityContainer = styled.div`
    display:flex;
    width:99.5vw;
    height:99vh;
    
`

const CommunityNavi = styled.div`
    background-color:rgba(255,255,0,.5);
    flex-grow:1;
`

const CommunityContent =styled.div`
    background-color:rgba(215,25,345,.5);
    min-width: 60vw;
    flex-grow:3;
`
const CreatePostIcon = styled.canvas`
    position: fixed;
    top:85%;
    left:72%;
    width:4rem;
    height:4rem;

    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    backdrop-filter: saturate(180%) blur(3px);
    
    @media only screen and (max-width: 767px){
        left:80%;
        width:3.5rem;
        height:3.5rem;
    }

`
const CommunityTemp = styled.div`
    background-color:rgba(25,25,212,.5);
    flex-grow:1;
`