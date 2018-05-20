package dao;

import model.User;

import java.util.List;

public interface UserMapper {
    public List<User> findAll();
    public void saveOrUpdate(User user);
    public void deleteById(int id);
    public User selectByName(String name);
    public void insert(User user);
}
