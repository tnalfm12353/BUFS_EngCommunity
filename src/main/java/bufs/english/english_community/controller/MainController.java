package bufs.english.english_community.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
 
@Controller
public class MainController {


    /*
        pathController
    */
    
    /* 
        "/" 하면 메인 홈페이지 이외에 reflush하면 에러가 떴다. 
        그런데 "/*"로 바꾸고 나니 모든 페이지가 잘됨 왜그럴까?
        --> 내 추측 main.bundle.js를 호출한후 페이지를 뛰우고 남은 url을 리액트 라우터에서 받아 페이지를 이동 시켜주기 때문?
        그리고 이렇게 만들면 보안이 약하지 않을까?
    */
    @GetMapping("/*") 
    public String Mainpage() {
        return "page";
    }
}