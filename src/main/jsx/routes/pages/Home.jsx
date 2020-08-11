import React from 'react';
import styled from 'styled-components';

import BUFS_school from '../../../webapp/img/bufs_school.jpg'

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
          image: null,
        }
        this.canvasRef = React.createRef();
        this.ctx = null;

    }

    componentDidMount(){
        console.log(this.canvasRef);
        this.ctx = this.canvasRef.current.getContext('2d');
        this.loadImage();
    }

    loadImage(){
        console.log(this.ctx);
        this.image = new window.Image();
        this.image.src = BUFS_school;
        console.log(this.image);
        this.image.addEventListener('load',()=>{
            this.ctx.drawImage(this.image,0,0, 1960,1442);
        });
    }

    

    onTestClicked() {
    
		
		axios.post('/hong',{
            param: {
                test: 'hello'
            }
        })
			.then(function (response) {
				console.log(response);
			}.bind(this))
			.catch(function (error) {
				console.log(error);
			});
	}

    render(){
        return(
            <HomeContainer>
                <HomeImg ref={this.canvasRef} width="1960px" height= "1442px"></HomeImg>
            </HomeContainer>
        );
    }
}

export default Home;

const HomeContainer = styled.div`
    display:flex;
    padding:0;
    align-items:center;
    justify-content:space-around;
`

const HomeImg = styled.canvas`
    position:absolute;
    top:0;
    left:0;
    z-index: 1;
    background-color: skyblue;
    
    width:100%;
    height:40vh;
`