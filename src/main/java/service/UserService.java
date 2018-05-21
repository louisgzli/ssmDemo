package service;


import dao.UserMapper;
import model.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * @version :
 * @author: blissolee
 * @date:2018年5月20日 下午5:49:26
 */
@Transactional(propagation = Propagation.REQUIRED)
@Service
public class UserService {
    @Resource
    UserMapper userMapper;

    public List<User> findAll() {
        return userMapper.findAll();

    }

    public void saveOrUpdate(model.User user) {
        System.out.println("service update");

        userMapper.saveOrUpdate(user);

    }

    public void deleteById(int id) {
        userMapper.deleteById(id);

    }

    public User selectByName(String name) {
        return userMapper.selectByName(name);

    }

    public void insert(model.User user) {
        System.out.println("service insert");
        userMapper.insert(user);
    }


}
