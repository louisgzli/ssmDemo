package service;

import dao.CommodityMapper;
import model.Commodity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Transactional(propagation=Propagation.REQUIRED)
@Service
public class CommodityService {
    @Resource
    CommodityMapper commodityMapper;
    public List<Commodity> findAll(){
        return commodityMapper.findAll();
    }
    public void saveOrUpdate(Commodity commodity){
        commodityMapper.saveOrUpdate(commodity);
    }
    public void deleteById(int id){
        commodityMapper.deleteById(id);
    }
    public void insert(Commodity commodity){
        commodityMapper.insert(commodity);
    }
}
