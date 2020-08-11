import React, {useState, useEffect} from 'react';
import styled from'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

import {setLayout} from '../../../lib/js/LoginUI';
import InputForm from './InputForm.jsx';

class CreatePostTem extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            size_info :{
                width: `100vw`,
                height: `100vh`
            },


        }
    }

    componentDidMount(){
        window.addEventListener('resize', ()=>{
            const { width,height } = setLayout();
            console.log(width,height);
            this.setState({
                size_info:{
                    width : width,
                    height: height
                }
            });
        });
    }


    render(){
        const {onClose} = this.props;
        const {size_info, } =this.state;
        return(
            <React.Fragment>
                <Overlay size_info = {size_info} onClick={()=>onClose()}>
                    <CreateMain size_info = {size_info} onClick={(e)=>e.stopPropagation()}>
                        <Header>Create Post</Header>
                        <InputWrapper>
                            <InputForm/>
                        </InputWrapper>
                        <EtcWrapper>
                            여기에 이미지 등등
                        </EtcWrapper>
                    </CreateMain>

                </Overlay>
            </React.Fragment>
        );
    }
}

export default CreatePostTem;
const Overlay = styled.div`
  position: fixed;
  width:${props => props.size_info.width};
  height:${props => props.size_info.height};
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.16);
  @media only screen and (max-width:767px){
    top:60px;
  }
`
const CreateMain = styled.main`
    display:flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    height:60vw;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);

     @media only screen and (max-width: 767px){
        position:absolute;
        width:${props => props.size_info.width};
        height:${props => props.size_info.height};
    }
`

const Header = styled.div`
    width:100%;
    z-index:10;
    padding: .3em 0;
    display:inline-block;
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
    font-family: 'Caveat', cursive;
    font-size: 2.5rem;
    color:#1d1d1d;
    text-align: center;
    
    border-bottom:1px solid #ccc;
    
`

const InputWrapper = styled.section`
    width:100%;

    background-color: #ccc;

`


const ContentArea = styled.textarea`
    position:relative;
    width:100%;

    font-size:1.25rem;
    resize:none;
    overflow:hidden;
    outline:none;
`

const EtcWrapper = styled.section`
    // border:1px solid red;

`
