package action;

import dao.UserMapper;
import model.User;

import javax.annotation.Resource;
import java.util.List;

public class UserManager {
    @Resource
    UserMapper usermapper;
    public int id;
    public String name;
    public String password;
    public int count;
    public List<User> userList;



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public List<User> getUserList() {
        return userList;
    }

    public void setUserList(List<User> userList) {
        this.userList = userList;
    }

    public String loadUser ()throws Exception{
        userList = usermapper.findAll();
        return "success";
    }

}
