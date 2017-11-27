package konra.anismile;

import java.util.List;

public class Response<T> {

    public static final String success = "success";
    public static final String failure = "failure";

    private String status;
    private T content;

    public Response() {
    }

    public Response(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public T getContent() {
        return content;
    }

    public void setContent(T content) {
        this.content = content;
    }
}
