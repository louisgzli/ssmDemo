package action;

import dao.UserMapper;
import model.User;
import service.UserService;

import javax.annotation.Resource;
import java.util.List;

import static com.opensymphony.xwork2.Action.ERROR;
import static com.opensymphony.xwork2.Action.SUCCESS;

public class UserAction {
    @Resource
    UserMapper userMapper;
    @Resource
    UserService userService;
    public int id;
    public String name;
    public String password;
    public List<User> userList;
    public boolean success;
    public String msg;

    public boolean isSuccess() {
        return success;
    }

    public String getMsg() {
        return msg;
    }

    public List<User> getUserList() {
        return userList;
    }

    public void setUserList(List<User> userList) {
        this.userList = userList;
    }

    public UserMapper getUserMapper() {
        return userMapper;
    }

    public void setUserMapper(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

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

    public String loadUser() throws Exception{

        System.out.println("loadUser");
        userList = userMapper.findAll();
        return "success";
    }

    public void userCreate(){
        System.out.println("userCreate");
        User temp = new User();

        temp.setName(name);
        temp.setPassword(password);
        userService.insert(temp);
    }
    public void userUpdate(){
        System.out.println("userUpdate");

        User temp = new User();
        temp.setId(id);
        temp.setName(name);
        temp.setPassword(password);
        userService.saveOrUpdate(temp);
    }

    public void dele(){
        System.out.println("dele");

        userService.deleteById(id);
    }

    public String  login(){
        System.out.println(name+"-=--=-=-=-=-=-=-="+password);
        User user = userMapper.selectByName(name);
        System.out.println(user.getPassword());
        System.out.println(user.getPassword().equals(password));
        System.out.println(user!=null);
        if(user!=null&&user.getPassword().equals(password)){
           success = true;
           msg = "OK";
           return SUCCESS;


        }
        else {
            msg="ERROR";
            success = false;
            return ERROR;
        }


    }




}
