package bufs.english.english_community.sign.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import bufs.english.english_community.sign.dto.LoginDTO;
import bufs.english.english_community.sign.service.LoginService;
import lombok.AllArgsConstructor;
/*
    JPA(Java Persistence API)
                                                                                https://gmlwjd9405.github.io/2019/08/04/what-is-jpa.html JPA란?
    자바 ORM 기술에 대한 API 표준 명세로, Java에서 제공하는 API이다.
    자바 플랫폼 SE와 자바 플랫폼 EE를 사용하는 응용프로그램에서 관계형 데이터베이스의 관리를 표현하는 자바 API이다.
    즉, JPA는 ORM을 사용하기 위한 표준 인터페이스를 모아둔 것이다.
    기존에 EJB에서 제공되던 엔터티 빈(Entity Bean)을 대체하는 기술이다.
    JPA 구성 요소 (세 가지)
        1) javax.persistance 패키지로 정의된 API 그 자체
        2) JPQL(Java Persistence Query Language)
        3) 객체/관계 메타데이터
    사용자가 원하는 JPA 구현체를 선택해서 사용할 수 있다.
    JPA의 대표적인 구현체로는 Hibernate, EclipseLink, DataNucleus, OpenJPA, TopLink Essentials 등이 있다.
    이 구현체들을 ORM(Object-Relational Mapping) Framework라고 부른다.

    https://gmlwjd9405.github.io/2018/12/25/difference-jdbc-jpa-mybatis.html
*/

/*
    Dto와 Entity를 분리해서 사용하는 이유
    1.View에서 표현하는 속성값들은 요청에 따라 계속 달라질 수 있는데, 그 때마다 Entity의 속성값들이 변하게 되면
      영속성 모델을 표현한 Entity의 순수성이 모호해짐.
    2.영역간 불필요한 속성값들의 전달로 불필요한 방어 및 체크로직이 생겨날 수 있고 API서비스의 경우, 명세가 달라지는 큰 이슈가 발생.
*/
@RestController
@AllArgsConstructor
public class LoginController{

    LoginService loginservice;
    
    @PostMapping("ValidNickname")
    public boolean ValidNickname(@RequestBody final LoginDTO.isNickExist nickname)throws Exception{
        loginservice.ValidNickname(nickname);
        return true;
    }

    @PostMapping("SignUp")
    public boolean SignUp(@RequestBody final LoginDTO.Userinfo userinfo)throws Exception{
        loginservice.SignUp(userinfo);
        return true;
    }

}