package bufs.english.english_community.sign.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import javax.validation.constraints.AssertTrue;

import org.modelmapper.ModelMapper;

import bufs.english.english_community.sign.dao.UserRepository;
import bufs.english.english_community.sign.dto.LoginDTO;
import bufs.english.english_community.sign.entity.User;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class LoginService{

    UserRepository userRepository;
    ModelMapper modelmapper;
    

    public boolean SignUp(LoginDTO.Userinfo userinfo){
        LocalDateTime now = LocalDateTime.now();
        userRepository.save(
            User.builder()
                .id(userinfo.getId())
                .pw(userinfo.getPw())
                .nickname(userinfo.getNickname())
                .build()
        );
        User user = 
        AssertTrue()
        return true;
    }

    public boolean ValidNickname(LoginDTO.isNickExist nickname){
        //User user = User.isExist(nickname);
        //System.out.println(user);
        // isnickExist = userRepository.fin
        return true;
    }

}