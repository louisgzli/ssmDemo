package dao;

import model.Commodity;

import java.util.List;

public interface CommodityMapper {
    public List<Commodity> findAll();

    public void saveOrUpdate(Commodity commodity);

    public void deleteById(int id);

    public void insert(Commodity commodity);
}
