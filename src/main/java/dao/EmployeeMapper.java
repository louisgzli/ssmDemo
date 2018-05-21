package dao;

import model.Employee;

import java.util.List;

public interface EmployeeMapper {
    public List<Employee> findAll();

    public void saveOrUpdate(Employee employee);

    public void deleteById(int id);

    public void insert(Employee employee);
}
