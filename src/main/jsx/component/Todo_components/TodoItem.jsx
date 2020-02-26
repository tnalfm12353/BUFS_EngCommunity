import React,{Component} from 'react';
import styled from 'styled-components';

class TodoItem extends Component{
    shouldComponentUpdate(nextProps, nextState) {
      return this.props.checked !== nextProps.checked;
    }

    render(){
        const {text, checked, id, color, onToggle, onRemove} =this.props;
        /*
            text: todo 내용
            checked: 체크박스 상태
            id: todo의 고유 아이디
            onToggle: 체크박스를 키고 끄는 함수
            onRemove: 아이템을 삭제시키는 함수
        */
      
       return(
         /* 
            onClick={onToggle{id}} 와 같은 형식으로 하고 싶다면.. 절대 안됩니다!!
            이렇게 하면 해당 함수가 렌더링 될 때 호출이 됩니다.
            해당 함수가 호출되면 데이터가 변경 될 것이고, 데이터가 변경되면 또 리렌더링이 되겠죠? 
            그러면 또 이 함수가 호출되고.. 무한 반복입니다.
         */
        <Todoitem onClick={() => onToggle(id)}>
            <Remove onClick={(e) =>{
                e.stopPropagation(); //누르면 onRemove, onToggle이 같이 실행되는데 그것을 방지하기 위함.
                onRemove(id)
            }}>&times;</Remove>
            <TodoText color ={color} checked={checked}>
                <div>{text}</div>
            </TodoText>
            {
                checked && (<CheckedMark>✓</CheckedMark>)
            }
            
        </Todoitem>
       );
    }
}

export default TodoItem;

const Todoitem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center; /* 세로 가운데 정렬 */
  cursor: pointer;
  transition: all 0.15s;
  user-select: none;
  &:hover {
    background: #e3fafc;
  }

  &+&{
    border-top: 1px solid #ffe373;
  }
`
const Remove = styled.div`
  margin-right: 1rem;
  color: #e64980;
  font-weight: 600;
  opacity: 0;

  ${Todoitem}:hover &{
    opacity:1;
  }
`

const TodoText = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800&display=swap&subset=korean);
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  flex: 1; /* 체크, 엑스를 제외한 공간 다 채우기 */

  word-break: break-all;
  
  color:${props=>props.color};
  text-decoration: ${props=>props.checked?"line-through":"none"};
  color:${props=>props.checked? '#adb5bd':""};
  
`

const CheckedMark = styled.div`
  font-size: 1.5rem;
  line-height: 1rem;
  margin-left: 1rem;
  color: #ffca08;
  font-weight: 800;
`