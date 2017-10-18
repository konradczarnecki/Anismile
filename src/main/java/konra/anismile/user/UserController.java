package konra.anismile.user;

import konra.anismile.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController()
public class UserController {

    UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @RequestMapping(value = "/login")
    public Response<String> login(@RequestBody User loggedUser, HttpSession session) {

        User user = service.getUser(loggedUser.getUsername());

        Response<String> rsp = new Response<>();

        if(user.getPassword().equals(loggedUser.getPassword())){
            rsp.setStatus(Response.success);
            rsp.setItem("tokenStub");
            session.setAttribute("user", user);

        } else rsp.setStatus(Response.failure);

        return rsp;
    }

    @RequestMapping(value = "/register")
    public Response<String> register(@RequestBody User newUser){
        service.addUser(newUser);
        return new Response<>(Response.success);
    }
}
