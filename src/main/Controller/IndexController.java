package main.Controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
    @GetMapping("/")
    public String index() {
       return "index";
    }

    @GetMapping("/register")
    public String Register (){
        return "register";
    }

    @GetMapping("/login")
    public String Login (){
        return "login";
    }
}