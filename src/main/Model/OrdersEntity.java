package main.Model;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "orders", schema = "public", catalog = "dbqkdo1ion775l")
public class OrdersEntity {
    private Integer orderid;
    private Integer sellerid;
    private Integer buyerid;
    private Integer shippingid;
    private Integer charityid;
    private Timestamp datecreated;

    @Id
    @Column(name = "orderid")
    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    @Basic
    @Column(name = "sellerid")
    public Integer getSellerid() {
        return sellerid;
    }

    public void setSellerid(Integer sellerid) {
        this.sellerid = sellerid;
    }

    @Basic
    @Column(name = "buyerid")
    public Integer getBuyerid() {
        return buyerid;
    }

    public void setBuyerid(Integer buyerid) {
        this.buyerid = buyerid;
    }

    @Basic
    @Column(name = "shippingid")
    public Integer getShippingid() {
        return shippingid;
    }

    public void setShippingid(Integer shippingid) {
        this.shippingid = shippingid;
    }

    @Basic
    @Column(name = "charityid")
    public Integer getCharityid() {
        return charityid;
    }

    public void setCharityid(Integer charityid) {
        this.charityid = charityid;
    }

    @Basic
    @Column(name = "datecreated")
    public Timestamp getDatecreated() {
        return datecreated;
    }

    public void setDatecreated(Timestamp datecreated) {
        this.datecreated = datecreated;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        OrdersEntity that = (OrdersEntity) o;

        if (orderid != null ? !orderid.equals(that.orderid) : that.orderid != null) return false;
        if (sellerid != null ? !sellerid.equals(that.sellerid) : that.sellerid != null) return false;
        if (buyerid != null ? !buyerid.equals(that.buyerid) : that.buyerid != null) return false;
        if (shippingid != null ? !shippingid.equals(that.shippingid) : that.shippingid != null) return false;
        if (charityid != null ? !charityid.equals(that.charityid) : that.charityid != null) return false;
        if (datecreated != null ? !datecreated.equals(that.datecreated) : that.datecreated != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = orderid != null ? orderid.hashCode() : 0;
        result = 31 * result + (sellerid != null ? sellerid.hashCode() : 0);
        result = 31 * result + (buyerid != null ? buyerid.hashCode() : 0);
        result = 31 * result + (shippingid != null ? shippingid.hashCode() : 0);
        result = 31 * result + (charityid != null ? charityid.hashCode() : 0);
        result = 31 * result + (datecreated != null ? datecreated.hashCode() : 0);
        return result;
    }
}
