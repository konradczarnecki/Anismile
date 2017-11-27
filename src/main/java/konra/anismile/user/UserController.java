package konra.anismile.user;

import konra.anismile.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping(value = "/login")
    public Response<String> login(@RequestBody User loggedUser, HttpSession session) {

        String token = service.login(loggedUser.getUsername(), loggedUser.getPassword(), session);
        boolean loginResult = !token.equals("access_denied") && !token.equals("user_not_found");

        Response<String> rsp = new Response<>();
        if(loginResult) rsp.setStatus(Response.success);
        else rsp.setStatus(Response.failure);
        rsp.setContent(token);

        return rsp;
    }

    @PostMapping(value = "/register")
    public Response<String> register(@RequestBody User newUser, HttpSession session){

        boolean registrationResult = service.addUser(newUser);

        Response<String> rsp = new Response<>();

        if(registrationResult){

            String token = service.login(newUser.getUsername(), newUser.getPassword(), session);
            rsp.setStatus(Response.success);
            rsp.setContent(token);

        } else rsp.setStatus(Response.failure);

        return rsp;
    }
}
