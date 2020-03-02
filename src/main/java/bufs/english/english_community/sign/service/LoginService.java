package bufs.english.english_community.sign.service;

import org.springframework.stereotype.Service;

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
        userRepository.save(
            User.builder()
                .id(userinfo.getId())
                .pw(userinfo.getPw())
                .nickname(userinfo.getNickname())
                .build()
        );

        return true;
    }

    public String ValidNickname(LoginDTO.isExist being){
        String temp = userRepository.ValidNickname(being.getBeing());
        if(temp == null){
            return "true";
        }else
            return "false";
    }

    public String ValidID(LoginDTO.isExist being){
        String temp = userRepository.ValidID(being.getBeing());
        System.out.println(temp);
        if(temp == null){
            return "true";
        }else
            return "false";
    }

}