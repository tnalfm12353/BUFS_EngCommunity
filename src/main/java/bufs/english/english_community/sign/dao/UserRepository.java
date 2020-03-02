package bufs.english.english_community.sign.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import bufs.english.english_community.sign.entity.User;
public interface UserRepository extends JpaRepository<User,Long>{
   
    /*
        1. 쿼리 메소드 - 메소드 이름으로 쿼리를 생성하는 방식
            Ex) List<...> findAllByOrderByRegDateDesc(); 
            이런식으로 메소드 이름을 정의하면 Spring data JPA가 이 메소드 이름을 "findAll, orderby, regData,desc"으로 파생하여 쿼리를 만들어냄.

            cf) https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation
        2.
    */

    /*  
        @Query를 사용하면 기본적으로 JPQL 문법으로 작용됨.
        JPQL문법은 JPA에서 사용되는 언어로 쿼리와 유사하나 Table이 아닌 Entity를 기준으로 데이터를 조회함.
        
        nativeQuery 속성은 true = SQL, false = JPQL
    */
    //닉네임 중복 확인
    @Query(value = "select nickname from User where nickname =:nickname ", nativeQuery = true)
    String ValidNickname(@Param("nickname") String nickname);
    //아이디 중복 확인
    @Query(value = "select id from User where id =:id", nativeQuery = true)
    String ValidID(@Param("id") String id);
}
