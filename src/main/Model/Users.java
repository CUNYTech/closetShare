package main.Model;

public class Users {
    private int UserID;
    private String FirstName;
    private String LastName;
    private String Login;
    private String Password;
    private String Email;
    private int CharityID;


    public int getUserID() {
        return UserID;
    }

    public void setUserId(int id) {
        this.UserID = id;
    }

    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String name) {
        this.FirstName = name;
    }

    public String getLastName() {
        return LastName;
    }

    public void setLastName(String name) {
        this.LastName = name;
    }

    public String getLogin() {
        return Login;
    }

    public void setLogin(String login) {
        this.Login = login;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        this.Password = password;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        this.Email = email;
    }

    public int getCharityID() {
        return CharityID;
    }

    public void setCharityID(int id) {
        this.CharityID = id;
    }
}
