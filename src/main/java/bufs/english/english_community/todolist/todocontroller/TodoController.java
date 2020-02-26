package bufs.english.english_community.todolist.todocontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import bufs.english.english_community.todolist.dto.TodoDTO;
import bufs.english.english_community.todolist.service.TodoService;
/* 
    Mybatis
    개발자가 지정한 SQL, 저장 프로시저 그리고 몇 가지 고급 매핑을 지원하는 SQL Mapper이다.
    JDBC로 처리하는 상당 부분의 코드와 파라미터 설정 및 결과 매핑을 대신해준다.
    기존에 JDBC를 사용할 때는 DB와 관련된 여러 복잡한 설정(Connection)들을 다루어야 했지만
    SQL Mapper는 자바 객체를 실제 SQL문에 연결함으로써, 빠른 개발과 편리한 테스트 환경을 제공한다.
    데이터베이스 record에 원시 타입과 Map 인터페이스 그리고 자바 POJO를 설정해서 매핑하기 위해 xml과 Annotation을 사용할 수 있다.

    장점
    SQL에 대한 모든 컨트롤을 하고자 할때 매우 적합하다.
    SQL쿼리들이 매우 잘 최적화되어 있을 때에 유용하다.

    단점
    애플리케이션과 데이터베이스 간의 설계에 대한 모든 조작을 하고자 할 때는 적합하지 않다.
    애플리케이션과 데이터베이스 간에 서로 잘 구조화되도록 많은 설정이 바뀌어야 하기 때문이다.

    https://gmlwjd9405.github.io/2018/12/25/difference-jdbc-jpa-mybatis.html
*/
@RestController
public class TodoController{
    
    @Autowired
    TodoService todoservice;

    @PostMapping("TodoInsert")
    public List<TodoDTO> Insert(@RequestBody final TodoDTO dto)throws Exception{
        todoservice.InsertTodo(dto); //값넣고


        /* 
            왜 select를 넣었냐면 axios가 비동기라 데이터 넣는 시간보다 빼오는 시간이 더빠르면 에러가 생김
            그래서 그걸 해결하고자.. 
            ----그런데 이걸 여기서 해결할려하면 안되고 dao에 넣어야 service를 두번왔다갔다하는 일이 안생김.----
                                            추후에 개선합시다!
        */
        final List<TodoDTO> todolist =  todoservice.SelectTodo();

        return todolist;
    }

    @PostMapping("TodoDelete")
    public List<TodoDTO> Delete(@RequestBody final TodoDTO dto)throws Exception{
        todoservice.DeletTodo(dto);

        final List<TodoDTO> todolist =  todoservice.SelectTodo();

        return todolist;
    }

    @PostMapping("TodoUpdate")
    public List<TodoDTO> Update(@RequestBody final TodoDTO todoDTO)throws Exception{
        todoservice.UpdateTodo(todoDTO);

        final List<TodoDTO> todolist =  todoservice.SelectTodo();
        
        return todolist;
    }
    /* 
        @Controller와는 다르게 
        @RestController는 리턴값에 자동으로 @ResponseBody를 붙게되어 
        HTTP 응답데이터(body)에 자바 객체가 매핑되어 전달 된다고 한다. 
    */
    @PostMapping("TodoSelect")
    public List<TodoDTO> Select()throws Exception{
       
        /* 생성자 때문에 만듬 */
        final List<TodoDTO> todolist = todoservice.SelectTodo();

        return todolist;
    }
}