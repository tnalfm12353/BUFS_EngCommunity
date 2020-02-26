package bufs.english.english_community.sign.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import bufs.english.english_community.sign.entity.User;
public interface UserRepository extends JpaRepository<User,Long>{
   
}
