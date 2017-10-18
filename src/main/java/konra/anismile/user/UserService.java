package konra.anismile.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User getUser(String username){
        return this.repository.findUserByUsername(username);
    }

    public void addUser(User newUser) {
        repository.save(newUser);
    }
}
