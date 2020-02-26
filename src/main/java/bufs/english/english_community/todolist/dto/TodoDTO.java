package bufs.english.english_community.todolist.dto;

/*
   Data Transfer Object의 줄임말이다. VO(Value Object)라고도 표현하는데, 계층간 데이터 교환을 위한 자바빈즈(Java Beans)다.
   여기서 말하는 계층간의 Controller, View, Business Layer, Persistent Layer를 말하며 
   각 계층간 데이터 교환을 위한 객체를 DTO 또는 VO라고 부른다.

   DTO는 보통 로직을 가지고 있지 않고 data와 그 data에 접근을 위한 getter, setter만 가지고 있다.

   정리하면 DTO는 Database에서 Data를 얻어 Service나 Controller 등으로 보낼 때 사용하는 객체를 말한다. 
*/
public class TodoDTO {
    private int id;
    private String text;
    private boolean checked;
    private String color;

    public int getId() {
        return this.id;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getText() {
        return this.text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean isChecked() {
        return this.checked;
    }

    public void setChecked(Boolean checked) {
        this.checked = checked;
    }
    
}