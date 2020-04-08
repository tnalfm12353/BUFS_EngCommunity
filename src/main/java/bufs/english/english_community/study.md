        https://jeong-pro.tistory.com/151 annotation 정리되어 있는 블로그
        https://gmlwjd9405.github.io/2018/12/25/difference-jdbc-jpa-mybatis.html 영속성 프레임워크에 대한 설명!
        Todo는 Mybatis를 사용함.

        Login,forum은 JPA(Java Persistence API)를 사용할 예정
        
======================================================================================================================================
        @Autowired란?
        원래 경우는 testServiceImpl에 testDAO를 주입하기 위해서는 XML파일에 
        <bean id="testDAO" class="bufs.english.~~~"/>
        
        <bean id="test" class="bufs.english.~~~~">
            <constructor-arg name="testDAO" ref="testServiceImpl"/>
        </bean>
        이러한 식으로 Bean설정을 해주어야함.

        그런데 @Autowired는 객체의 의존성을 가지는 부분에 간단히 @Autowired 사용하여 쉽게 의존성 주입을 받음.
======================================================================================================================================
        Data Transfer Object의 줄임말이다. VO(Value Object)라고도 표현하는데, 계층간 데이터 교환을 위한 자바빈즈(Java Beans)다.
        여기서 말하는 계층간의 Controller, View, Business Layer, Persistent Layer를 말하며 
        각 계층간 데이터 교환을 위한 객체를 DTO 또는 VO라고 부른다.

        DTO는 보통 로직을 가지고 있지 않고 data와 그 data에 접근을 위한 getter, setter만 가지고 있다.

        정리하면 DTO는 Database에서 Data를 얻어 Service나 Controller 등으로 보낼 때 사용하는 객체를 말한다. 
======================================================================================================================================
        Model의 객체를 이용해서, View로 데이터 전달함.
======================================================================================================================================