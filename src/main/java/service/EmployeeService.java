package service;

import dao.EmployeeMapper;
import model.Employee;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Transactional(propagation = Propagation.REQUIRED)
@Service
public class EmployeeService {
    @Resource
    EmployeeMapper employeeMapper;

    public List<Employee> findAll() {
        return employeeMapper.findAll();
    }

    public void saveOrUpdate(Employee employee) {
        employeeMapper.saveOrUpdate(employee);
    }

    public void deleteById(int id) {
        employeeMapper.deleteById(id);
    }

    public void insert(Employee employee) {
        employeeMapper.insert(employee);
    }
}
