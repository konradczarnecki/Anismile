package konra.anismile.user;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Component
public class LoginInterceptor extends HandlerInterceptorAdapter {

    private static final Logger log = Logger.getLogger(LoginInterceptor.class);

    @Autowired
    UserService userService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler){

        HttpSession session = request.getSession(true);

        String token = request.getHeader("token");
        User user = (User) session.getAttribute("user");
        Token.Status status = userService.verifyToken(token, user);

        response.setHeader("Authentication", status.getValue());
        return status.getAllowAccess();
    }
}
