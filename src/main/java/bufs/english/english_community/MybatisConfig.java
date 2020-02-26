package bufs.english.english_community;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.modelmapper.ModelMapper;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration  
@MapperScan(basePackages = "bufs.english.english_community")
@EnableTransactionManagement 
/*  
    TrasactionManager를 적용할 것인지 에 대해 설정
    트랜잭션 설정에 따라 자동으로 커밋 혹은 롤백을 수행하고 닫혀지게 할 수 있는 어노테이션
*/

public class MybatisConfig{


    /*
        @Bean SqlSessionFactory 
        DataSource를 parameter로 받아, sqlSessionFactory를 생성하는 Bean이다.
        즉, 여기서 만들어진 기본정보, 설정값등을 이용해서 SqlSessionTemplate를 만드게 되는 것이다.
        SqlSessionFactory는 직접 사용할 필요가 없다. 
        스프링 트랜잭션 설정(TrasactionManager)에 따라 자동으로 커밋 혹은 롤백을 수행하고 닫혀지기 때문. 
    */
    @Bean
    public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource);
        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        sessionFactory.setMapperLocations(resolver.getResources("classpath:mapper/*.xml"));
        return sessionFactory.getObject();
    }

    @Bean
    public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory sqlSessionFactory) throws Exception {
      final SqlSessionTemplate sqlSessionTemplate = new SqlSessionTemplate(sqlSessionFactory);
      return sqlSessionTemplate;
    }


    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }


}
