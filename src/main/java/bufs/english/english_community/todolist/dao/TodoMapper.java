package bufs.english.english_community.todolist.dao;

import java.util.List;

import bufs.english.english_community.todolist.dto.TodoDTO;

public interface TodoMapper{

    public void InsertTodo(TodoDTO todoDTO) throws Exception;
    public void DeleteTodo(TodoDTO todoDTO) throws Exception;
    public List<TodoDTO> SelectTodo(TodoDTO todoDTO) throws Exception;
    public void UpdateTodo(TodoDTO todoDTO) throws Exception;
}