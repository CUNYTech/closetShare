package main.Model;

import javax.persistence.*;

@Entity
@Table(name = "productsold", schema = "public", catalog = "dbqkdo1ion775l")
@IdClass(ProductsoldEntityPK.class)
public class ProductsoldEntity {
    private Integer orderid;
    private Integer productid;

    @Id
    @Column(name = "orderid")
    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    @Id
    @Column(name = "productid")
    public Integer getProductid() {
        return productid;
    }

    public void setProductid(Integer productid) {
        this.productid = productid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ProductsoldEntity that = (ProductsoldEntity) o;

        if (orderid != null ? !orderid.equals(that.orderid) : that.orderid != null) return false;
        if (productid != null ? !productid.equals(that.productid) : that.productid != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = orderid != null ? orderid.hashCode() : 0;
        result = 31 * result + (productid != null ? productid.hashCode() : 0);
        return result;
    }
}
