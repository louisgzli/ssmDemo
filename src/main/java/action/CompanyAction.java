package action;

import com.opensymphony.xwork2.ActionSupport;
import dao.CompanyDaoMapper;
import model.Company;
import service.CompanyService;

import javax.annotation.Resource;
import java.util.List;

public class CompanyAction extends ActionSupport {
    @Resource
    CompanyDaoMapper companyDaoMapper;
    @Resource
    CompanyService companyService;
    List<Company> companies;
    int id;
    String company;
    int staff;
    String type;
    String area;
    public List<Company> getCompanies() {
        return companies;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public int getStaff() {
        return staff;
    }

    public void setStaff(int staff) {
        this.staff = staff;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public void setCompanies(List<Company> companies) {
        this.companies = companies;
    }

    //添加company
    public void companyCreate(){
        System.out.println("companyCreate");
        Company temp = new Company();

        temp.setStaff(staff);
        temp.setCompany(company);
        temp.setArea(area);
        temp.setType(type);
        System.out.println(temp);
        companyService.insert(temp);
    }
    //修改company
    public void companyUpdate(){
        System.out.println("companyUpdate");

        Company temp = new Company();
        temp.setId(id);
        temp.setStaff(staff);
        temp.setCompany(company);
        temp.setArea(area);
        temp.setType(type);
        System.out.println(temp);
        companyService.saveOrUpdate(temp);
    }
    //删除company
    public void companyDelete(){
        System.out.println("companyDelete");
        System.out.println("-%%%%%%%%%%%%%%%%%%%%%%%%%%%=====================*********************");
        companyService.deleteById(id);
    }




    public String loadCompany() throws Exception{

        companies = companyService.findAll();


        System.out.println(companies);
        return SUCCESS;
    }



}
