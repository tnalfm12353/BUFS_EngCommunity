package bufs.english.english_community.sign.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import bufs.english.english_community.baseentity.BaseTimeEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED) /* 무분별한 Entity생성을 막기위함. */
public class User extends BaseTimeEntity{
    /* 
        @GeneratedValue : 주 키의 값을 자동 생성하기 위해 명시하는 데 사용되는 어노테이션입니다.
        자동 생성 전략은 크게 (AUTO, IDENTITY, SEQUENCE, TABLE) 이 있습니다.

        AUTO(default)	JPA 구현체가 자동으로 생성 전략을 결정한다.
        IDENTITY	    기본키 생성을 데이터베이스에 위임한다. 예를 들어 MySQL의 경우 AUTO_INCREMENT를 사용하여 기본키를 생성한다.
        SEQUENCE	    데이터베이스의 특별한 오브젝트 시퀀스를 사용하여 기본키를 생성한다.
        TABLE	        데이터베이스에 키 생성 전용 테이블을 하나 만들고 이를 사용하여 기본키를 생성한다
    */
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
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

}