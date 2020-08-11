package bufs.english.english_community.sign.service;

import org.springframework.stereotype.Service;

import org.modelmapper.ModelMapper;

import bufs.english.english_community.sign.dao.UserRepository;
import bufs.english.english_community.sign.dto.LoginDTO;
import bufs.english.english_community.sign.entity.englishuser;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class LoginService{

    UserRepository userRepository;
    ModelMapper modelmapper;
    

    public boolean SignUp(LoginDTO.SignUp signup){
        userRepository.save(
            englishuser.builder()
                .id(signup.getId())
                .pw(signup.getPw())
                .nickname(signup.getNickname())
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
        if(temp == null){
            return "true";
        }else
            return "false";
    }
    public LoginDTO.Userinfo Login(LoginDTO.Login login){
        LoginDTO.Userinfo userinfo;
        englishuser user = userRepository.findById(login.getId());
        if(login.getPw().equals(user.getPw())){
            userinfo = modelmapper.map(user,LoginDTO.Userinfo.class);
        }else{
            userinfo = null;
        }
        System.out.println("userID = "+userinfo.getId()+"\nuserCode = "+userinfo.getCode());
        return userinfo;
    }
}