package main.Model;

import javax.persistence.*;

@Entity
@Table(name = "charity", schema = "public", catalog = "dbqkdo1ion775l")
public class CharityEntity {
    private Integer charityid;
    private String name;
    private String address;

    @Id
    @Column(name = "charityid")
    public Integer getCharityid() {
        return charityid;
    }

    public void setCharityid(Integer charityid) {
        this.charityid = charityid;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "address")
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        CharityEntity that = (CharityEntity) o;

        if (charityid != null ? !charityid.equals(that.charityid) : that.charityid != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (address != null ? !address.equals(that.address) : that.address != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = charityid != null ? charityid.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (address != null ? address.hashCode() : 0);
        return result;
    }
}
