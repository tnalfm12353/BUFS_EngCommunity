package bufs.english.english_community.baseentity;

import java.time.LocalDateTime;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Getter;

@Getter
@MappedSuperclass /* JPA Entity 클래스들이 이 클래스를 상속할 경우 필드들도 컬럼으로 인식하게 만드는 어노테이션 */
@EntityListeners(AuditingEntityListener.class)
public abstract class BaseTimeEntity{

    @CreatedDate /* Entity가 생성되어 저장될때 시간이 자동저장됨. */
    private LocalDateTime createdData;

    @LastModifiedDate /* 조회한 Entity의 값이 변경될 때 시간이 자동저장됨. */
    private LocalDateTime modifiedData;
}