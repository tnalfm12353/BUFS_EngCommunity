import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import TodoTemplate from '../component/Todo_components/TodoListTemplate.jsx';
import Form from '../component/Todo_components/Form.jsx';
import TodoItemList from '../component/Todo_components/TodoItemList.jsx';
import Palette from '../component/Todo_components/Palette.jsx';

const colors = ['#343a40', '#f03e3e','#ff8040','#ffca08', '#12b886', '#228ae6','#400080','#800080','#e3fafc'];

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: '#343a40',
            input: '',
            todos: []
        }
        this.getDB_Data();

        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleCreate = this
            .handleCreate
            .bind(this);
        this.handlePressKey = this
            .handlePressKey
            .bind(this);
        this.handleRemove = this
            .handleRemove
            .bind(this);
        this.handleToggle = this
            .handleToggle
            .bind(this);
        this.getDB_Data = this
            .getDB_Data
            .bind(this);

        this.handleSelectColor = this.handleSelectColor.bind(this);
    }

    getDB_Data() {
        axios
            .post('/TodoSelect')
            .then(function (response) {
                this.setState({input: '', todos: response.data});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChange(e) {
        this.setState({
            input: e.target.value //input의 다음 바뀔 값
        });
    }

    /*
        리액트에서 배열을 다룰 때는 절대로 push사용하면 안됨!
        why? 배열에 값이 추가되긴 하지만 가르키고 있는 배열은 똑같기 때문에 비교를 할 수 없음.
        추후 최적화할 때, 배열을 비교하여 리렌더링 방지를하는데 push를 사용하면 최적화를 할 수 없음..
        그래서 concat을 사용함.
    */
    handleCreate() {
        const {input, todos , color} = this.state;
        let temp_id = todos.length === 0
            ? 0
            : todos[todos.length - 1].id + 1; //0 or 마지막 인덱스의 id값에 +1

        /* Spring에 데이터 보내기 */
        let tododata = JSON.stringify({id: temp_id, text: input, checked: false, color:color});

        axios
            .post('/TodoInsert', tododata, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            })
            .then(function (response) {
                this.setState({input: '', todos: response.data});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });

    }

    handleRemove(id) {
        let tododata = JSON.stringify({id: id})

        axios
            .post('/TodoDelete', tododata, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            })
            .then(function (response) {
                this.setState({input: '', todos: response.data});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }

    /*
        배열들을 업데이트 할 때마다 복사하면 오버헤드가 일어나지 않을까?
        ->Do not worry, 전개연산자를 통하여 배열을 복사하는것은 deepCopy가 아닌 shallowClone 이기 때문
        shallowClone은 내부의 객체 안에있는 내용들은 기존의 것으로 재사용함.
    */
    handleToggle(id) {
    /*
    const {todos} =this.state;
    //파라미터로 받은 id를 가지고 몇 번째 아이템인지 찾음.
    const index = todos.findIndex(todo => todo.id ===id);
    const selected = todos[index]; //선택한 객체

    const nextTodos =[...todos]; //배열을 복사

    //기존의 값들을 복사하고, checked 값을 덮어 쓰기
    nextTodos[index] ={
        ...selected,
        checked: !selected.checked
    };

    this.setState({
        todos: nextTodos
    });
    */

    let tododata = JSON.stringify({id: id})

    axios
        .post('/TodoUpdate', tododata, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
        .then(function (response) {
            this.setState({input: '', todos: response.data});
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }

    handlePressKey(e) {
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    }

    handleSelectColor(color){
        this.setState({
          color
        })
      }

    render() {
        const {input, todos,color} = this.state;
        const {handleChange, handleCreate, handlePressKey, handleToggle, handleRemove,handleSelectColor} = this;

        return (
            <div>
                <TodoTemplate
                    form={<Form
                    value = {
                        input
                    }
                    onKeyPress = {
                        handlePressKey
                    }
                    onChange = {
                        handleChange
                    }
                    onCreate = {
                        handleCreate
                    }
                    color = {
                        color
                    }
                    />}
                    palette = {<Palette 
                    colors={colors}
                    selected ={color}
                    onSelect={handleSelectColor}
                    />}
                    >
                    <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
                </TodoTemplate>
            </div>

        );
    }
}

export default TodoList;