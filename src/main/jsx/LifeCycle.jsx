import React, { Component } from 'react';
import ReactDOM from 'react-dom';


/* jsp만 바꾸면됨. */
class LifeCycle extends Component {
  

  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
        number: 0

  }

  this.handleIncrease = this .handleIncrease .bind(this);

  this.handleDecrease = this .handleDecrease .bind(this);
  }
  
  componentWillMount() {
    console.log('componentWillMount (deprecated)');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
    /* didupdata와 비슷한듯 차이점 찾아봐야댐 */
  }
  

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    /* 페이지가 달라질때마다 이 함수가 돌아감. 예를들어 타자칠때 하나칠때마다 돌아감*/
  }
  

  handleIncrease(){
    const { number } = this.state;
    let temp = number+1;
    this.setState({
      number: temp,
    });
  }

  handleDecrease(){
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    );
  }
  
  render() {
    console.log('render');
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

ReactDOM
    .render(<LifeCycle/>, document.getElementById('root'));