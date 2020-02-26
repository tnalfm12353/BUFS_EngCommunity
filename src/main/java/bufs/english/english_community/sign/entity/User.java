package bufs.english.english_community.sign.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.PrePersist;

import bufs.english.english_community.sign.dto.LoginDTO;
import bufs.english.english_community.util.ModelMapperUtil;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@ToString
@Entity
public class User{
    /* 
        @GeneratedValue : 주 키의 값을 자동 생성하기 위해 명시하는 데 사용되는 어노테이션입니다.
        자동 생성 전략은 크게 (AUTO, IDENTITY, SEQUENCE, TABLE) 이 있습니다.

        AUTO(default)	JPA 구현체가 자동으로 생성 전략을 결정한다.
        IDENTITY	    기본키 생성을 데이터베이스에 위임한다. 예를 들어 MySQL의 경우 AUTO_INCREMENT를 사용하여 기본키를 생성한다.
        SEQUENCE	    데이터베이스의 특별한 오브젝트 시퀀스를 사용하여 기본키를 생성한다.
        TABLE	        데이터베이스에 키 생성 전용 테이블을 하나 만들고 이를 사용하여 기본키를 생성한다
    */
    @Id
    @GeneratedValue
    private long code;

    @Column(length= 20, nullable = false)
    private String id;
    @Column(length= 20, nullable = false)
    private String pw;
    @Column(length= 20, nullable = false)
    private String nickname;
 

    /*
        @Builder : 해당 클래스의 빌더패턴 클래스를 생성
        생성자 상단에 선언시 생성자에 포함된 필드만 빌더에 포함
        생성자나 빌더나 생성시점에 값을 채워주는 역할은 똑같음.
        그러나 어느 필드에 어떤 값을 채워야 할지 명확하게 인지할 수 있게 만들어야댐 
        ex)
            Example.builder()       
                    .a(a)
                    .b(b)
                    .build();

    */

    @Builder
    public User(String id,String pw,String nickname){
        this.id = id;
        this.pw = pw;
        this.nickname = nickname;
    }

    public static User of(LoginDTO.Userinfo userinfo){
        User user = ModelMapperUtil.getModelMapper().map(userinfo, User.class);

        return user;
    }
    // public static String isExist(LoginDTO.isNickExist nickname){
    //     String nick = ModelMapperUtil.getModelMapper().map(nickname, User.class.);

    //     return nick;
    // }
}