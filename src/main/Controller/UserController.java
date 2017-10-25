package main.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import main.Services.UserServices;

@Controller
public class UserController {
    @GetMapping("/reg")
    public String Reg(HttpServletRequest request, HttpServletResponse response){

        String fname = request.getParameter("fname");
        String lname = request.getParameter("lname");
        String email = request.getParameter("email");
        String login = request.getParameter("login");
        String password = request.getParameter("password");

        //UserServices newUser = new UserServices();
        //Integer newID = newUser.addUser(fname, lname, email, login, password);

        return "RegistrationSuccess";
    }


    @GetMapping("/profile")

    public String Login(HttpServletRequest request, HttpServletResponse response){


        String login = request.getParameter("login");
        String password = request.getParameter("password");



        return "profile";
    }



}
