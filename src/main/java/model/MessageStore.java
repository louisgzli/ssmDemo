package model;

/**
 * @author blissolee
 */
public class MessageStore {
    private String message;


    public MessageStore() {
        message = "Hello struts users";
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
