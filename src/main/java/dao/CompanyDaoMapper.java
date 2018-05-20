package dao;

import model.Company;

import java.util.List;

public interface CompanyDaoMapper {
    public List<Company> findAll();
    public void saveOrUpdate(Company company);
    public void deleteById(int id);
    public void insert(Company company);

}
