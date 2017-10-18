package konra.anismile;

import java.util.List;

public class Response<T> {

    public static final String success = "success";
    public static final String failure = "failure";

    private String status;
    private T item;
    private List<T> items;

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

    public T getItem() {
        return item;
    }

    public void setItem(T item) {
        this.item = item;
    }

    public List<T> getItems() {
        return items;
    }

    public void setItems(List<T> items) {
        this.items = items;
    }
}
