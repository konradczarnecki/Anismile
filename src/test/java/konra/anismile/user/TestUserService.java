package konra.anismile.user;

import konra.anismile.util.Encryption;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.mockito.Mockito.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import javax.servlet.http.HttpSession;

import java.util.Date;

import static org.assertj.core.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= SpringBootTest.WebEnvironment.RANDOM_PORT)
public class TestUserService {

    @TestConfiguration
    public static class UserServiceTestConfiguration {

        @MockBean
        UserRepository repository;

        @Bean
        public UserService userService(Encryption encryption) {

            return new UserService(repository, encryption);
        }

        @Bean
        public Encryption encryption(){

            return new Encryption();
        }
    }

    @Autowired
    private UserService userService;

    @Autowired
    private Encryption crypto;

    private User testUser;

    public TestUserService() {
    }

    @Before
    public void setup(){

        testUser = new User();
        testUser.setId(1);
        testUser.setUsername("test_user");
        testUser.setPassword("password");
        testUser.setSecretKey("secret0123456789");

        UserRepository userRepository = userService.getRepository();

        when(userRepository.findUserByUsername(testUser.getUsername())).thenReturn(testUser);
        when(userRepository.save(any(User.class))).thenReturn(testUser);
    }

    @Test
    public void testGetUser(){

        assertThat(userService.getUser(testUser.getUsername())).isEqualToComparingFieldByField(testUser);
    }

    @Test
    public void testAddUserSuccess(){

        testUser.setUsername("unique_username");

        assertThat(userService.addUser(testUser)).isTrue();
    }

    @Test
    public void testAddUserWhenDuplicateUsername(){

        assertThat(userService.addUser(testUser)).isFalse();
    }

    @Test
    public void testLoginSuccess(){

        HttpSession session = new MockHttpSession();

        String token = userService.login(testUser.getUsername(), testUser.getPassword(), session);
        String decrypted = crypto.decrypt(testUser.getSecretKey(), token);

        assertThat(decrypted.indexOf(testUser.getUsername())).isEqualTo(0);
        assertThat(session.getAttribute("user")).isEqualToComparingFieldByField(testUser);
    }

    @Test
    public void testLoginWhenUserNotFound(){

        HttpSession session = new MockHttpSession();

        String token = userService.login("not_test_user", "pwd", session);

        assertThat(token).matches("user_not_found");
    }

    @Test
    public void testLoginWhenInvalidPassword(){

        HttpSession session = new MockHttpSession();

        String token = userService.login(testUser.getUsername(), "invalid", session);

        assertThat(token).matches("invalid_password");
    }

    @Test
    public void testVerifyTokenSuccess(){

        HttpSession session = new MockHttpSession();

        String token = userService.login(testUser.getUsername(), testUser.getPassword(), session);
        Token.Status status = userService.verifyToken(token, testUser);

        assertThat(status).isEqualByComparingTo(Token.Status.OK);
    }

    @Test
    public void testVerifyTokenWhenExpired(){

        Token t = Token.create(testUser, 1);
        t.setExpiryTimestamp(new Date().getTime() - 5000);
        String token = userService.hashToken(t);
        Token.Status status = userService.verifyToken(token, testUser);

        assertThat(status).isEqualByComparingTo(Token.Status.EXPIRED);
    }

}
