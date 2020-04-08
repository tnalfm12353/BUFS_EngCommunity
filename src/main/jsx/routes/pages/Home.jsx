import React from 'react';
import axios from 'axios';

class Home extends React.Component{

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
            <div>
                <h2>홈!</h2>
                <br/>
                <form >
                    <button onClick={this.onTestClicked}> test </button>
                </form>
            </div>
        );
    }
}

export default Home;