package action;

import dao.EmployeeMapper;
import model.Employee;

import javax.annotation.Resource;
import java.util.List;

public class EmployeeAction {
    @Resource
    EmployeeMapper employeeMapper;
    public int id;
    public String name;
    public int age;
    public String company;
    public List<Employee> employeeList;

    public List<Employee> getEmployeeList() {
        return employeeList;
    }

    public void setEmployeeList(List<Employee> employeeList) {
        this.employeeList = employeeList;
    }

    public EmployeeMapper getEmployeeMapper() {
        return employeeMapper;
    }

    public void setEmployeeMapper(EmployeeMapper employeeMapper) {
        this.employeeMapper = employeeMapper;
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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }
    public String loadEmployee(){
        employeeList = employeeMapper.findAll();
        return "success";
    }

    public void employeeCreate(){
        Employee temp = new Employee();

        temp.setName(name);
        temp.setAge(age);
        temp.setCompany(company);
        employeeMapper.insert(temp);
    }
    public void employeeUpdate(){
        Employee temp = new Employee();
        temp.setId(id);
        temp.setName(name);
        temp.setAge(age);
        temp.setCompany(company);
        employeeMapper.saveOrUpdate(temp);
    }

    public void dele(){
        employeeMapper.deleteById(id);
    }



}
