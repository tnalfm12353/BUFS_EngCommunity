package bufs.english.english_community.sign.dto;

import bufs.english.english_community.sign.entity.User;
import bufs.english.english_community.util.ModelMapperUtil;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class LoginDTO {
    
    /*
        json을 parsing하는 상황에는
        static이 아니면 org.springframework.http.converter.HttpMessageNotReadableException: JSON parse error: 에러가뜸
        can only instantiate non-static inner class by using default, no-argument constructor
        ->inner class가 static(정적)으로 선언되지 않는 한 단독(Outer 클래스를 참조하지 않고)으로 inner class의 디폴트 생성자를 호출해 
        인스턴스를 생성할 수 없는 것이다. 즉, inner class를 별로도 만들던가 static inner class로 선언해야함.

        cf) inner class의 내부의 static class는 보통 static class, method와 다르게 인스턴스가 동일 메모리 주소를 참조하지 않음.
            ex) Class. StaticClass st1 = new Class. StaticClass();
                Class. StaticClass st2 = new Class. StaticClass(); 는 서로 다른 인스턴스임. 서로 다른 메모리 영역에 있음.
    */
    @Setter
    @Getter
    @NoArgsConstructor
    public static class isNickExist{
        private String nickname;
        private boolean isExist;
    }

    @Setter
    @Getter
    @NoArgsConstructor
    public static class Userinfo{
        private String id;
        private String pw;
        private String nickname;
    }

    
}