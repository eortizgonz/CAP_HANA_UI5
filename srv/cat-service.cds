using my.fdmii as fdmii from '../db/schema';
service CatalogService {

    entity Orders as projection on fdmii.Orders;

}