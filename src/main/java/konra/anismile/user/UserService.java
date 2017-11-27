package konra.anismile.user;

import konra.anismile.util.Encryption;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.Date;

@Service
public class UserService {

    @Value("${token.valid.time}")
    private Integer TOKEN_LIFESPAN;

    private UserRepository repository;
    private Encryption crypto;

    @Autowired
    public UserService(UserRepository repository, Encryption encryption) {

        this.repository = repository;
        this.crypto = encryption;
    }

    public UserService(){

    }

    public User getUser(String username){
        return this.repository.findUserByUsername(username);
    }

    public boolean addUser(User newUser) {

        User existing = repository.findUserByUsername(newUser.getUsername());
        if(existing != null) return false;

        String secretSource = newUser.getPassword().substring(2, 4) + "sosecret" + newUser.getUsername();
        String secret = DigestUtils.sha256Hex(secretSource).substring(0, 16);
        newUser.setSecretKey(secret);

        User savedUser = repository.save(newUser);

        return savedUser != null;
    }

    public String login(String username, String password, HttpSession session) {

        User user = getUser(username);
        if(user == null) return "user_not_found";

        if(user.getPassword().equals(password)) {

            session.setAttribute("user", user);
            Token t = Token.create(user, TOKEN_LIFESPAN);
            return hashToken(t);

        } else return "invalid_password";
    }

    public String hashToken(Token token) {

        String key = token.getUser().getSecretKey();
        String source = token.getUser().getUsername() + token.getExpiryTimestamp();

        return crypto.encrypt(key, source);
    }

    public Token.Status verifyToken(String token, User user) {

        String decrypted = crypto.decrypt(user.getSecretKey(), token);

        if(decrypted.indexOf(user.getUsername()) != 0)
            return Token.Status.INVALID;

        else if(Long.valueOf(decrypted.substring(user.getUsername().length())) < new Date().getTime())
            return Token.Status.EXPIRED;

        else return Token.Status.OK;
    }

    public UserRepository getRepository() {
        return repository;
    }

    public void setRepository(UserRepository repository) {
        this.repository = repository;
    }
}
