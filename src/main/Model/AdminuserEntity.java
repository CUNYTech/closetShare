package main.Model;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "adminuser", schema = "public", catalog = "dbqkdo1ion775l")
public class AdminuserEntity {
    private Integer userid;
    private String firstnm;
    private String lastnm;
    private String login;
    private String password;
    private Timestamp datecreated;

    @Id
    @Column(name = "userid")
    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    @Basic
    @Column(name = "firstnm")
    public String getFirstnm() {
        return firstnm;
    }

    public void setFirstnm(String firstnm) {
        this.firstnm = firstnm;
    }

    @Basic
    @Column(name = "lastnm")
    public String getLastnm() {
        return lastnm;
    }

    public void setLastnm(String lastnm) {
        this.lastnm = lastnm;
    }

    @Basic
    @Column(name = "login")
    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    @Basic
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

        AdminuserEntity that = (AdminuserEntity) o;

        if (userid != null ? !userid.equals(that.userid) : that.userid != null) return false;
        if (firstnm != null ? !firstnm.equals(that.firstnm) : that.firstnm != null) return false;
        if (lastnm != null ? !lastnm.equals(that.lastnm) : that.lastnm != null) return false;
        if (login != null ? !login.equals(that.login) : that.login != null) return false;
        if (password != null ? !password.equals(that.password) : that.password != null) return false;
        if (datecreated != null ? !datecreated.equals(that.datecreated) : that.datecreated != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userid != null ? userid.hashCode() : 0;
        result = 31 * result + (firstnm != null ? firstnm.hashCode() : 0);
        result = 31 * result + (lastnm != null ? lastnm.hashCode() : 0);
        result = 31 * result + (login != null ? login.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        result = 31 * result + (datecreated != null ? datecreated.hashCode() : 0);
        return result;
    }
}
