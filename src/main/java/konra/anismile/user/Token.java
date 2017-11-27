package konra.anismile.user;

import org.springframework.beans.factory.annotation.Value;

import java.util.Date;

public class Token {

    private int id;
    private User user;
    private long expiryTimestamp;

    public Token(){
    }

    public static Token create(User user, int lifespan){

        Token t = new Token();
        t.user = user;
        t.expiryTimestamp = new Date().getTime() + lifespan * 60000;

        return t;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public long getExpiryTimestamp() {
        return expiryTimestamp;
    }

    public void setExpiryTimestamp(long expiryTimestamp) {
        this.expiryTimestamp = expiryTimestamp;
    }

    public enum Status {

        OK("OK", true), INVALID("INVALID", false), EXPIRED("EXPIRED", false);

        private String value;
        private boolean allowAccess;

        Status(String value, boolean allowAccess){

            this.value = value;
            this.allowAccess = allowAccess;
        }

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }

        public boolean getAllowAccess() {
            return allowAccess;
        }

        public void setAllowAccess(boolean allowAccess) {
            this.allowAccess = allowAccess;
        }
    }
}
