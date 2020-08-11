package bufs.english.english_community.todolist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bufs.english.english_community.todolist.dao.TodoMapper;
import bufs.english.english_community.todolist.dto.TodoDTO;

@Service
public class TodoService{
    
    /* 
        interface를 구현안함.
        why? 간단하여 디자인 패턴을 사용할 것두 없고 협업으로 하는 것두 아니기 때문이라고 생각하기 때문에.
    */

    @Autowired
    TodoMapper todoMapper;

    public void InsertTodo(TodoDTO todoDTO)throws Exception{
        todoMapper.InsertTodo(todoDTO);
    }

    public void DeletTodo(TodoDTO todoDTO)throws Exception{
        todoMapper.DeleteTodo(todoDTO);
    }

    public List<TodoDTO> SelectTodo(TodoDTO todoDTO) throws Exception{
        
        List<TodoDTO> todolist =todoMapper.SelectTodo(todoDTO);

        return todolist;
    }

    public void UpdateTodo(TodoDTO todoDTO) throws Exception{
        todoMapper.UpdateTodo(todoDTO);
    }
}