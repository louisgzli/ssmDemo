package service;

import dao.CompanyDaoMapper;
import model.Company;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Transactional(propagation=Propagation.REQUIRED)
@Service
public class CompanyService {
    @Resource
    CompanyDaoMapper companyDaoMapper;
    public List<Company> findAll(){
        return companyDaoMapper.findAll();
    }
    public void saveOrUpdate(Company company){
        companyDaoMapper.saveOrUpdate(company);
    }
    public void deleteById(int id){
        companyDaoMapper.deleteById(id);
    }
    public void insert(Company company){
        companyDaoMapper.insert(company);
    }
}
