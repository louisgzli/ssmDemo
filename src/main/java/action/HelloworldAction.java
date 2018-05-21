package action;

/**
 * @author: blissolee
 * @date:2018年5月2日 下午5:13:59
 * @version :
 */

import com.opensymphony.xwork2.ActionSupport;
import model.MessageStore;

public class HelloworldAction extends ActionSupport {
    private static int helloCount = 0;
    private MessageStore messageStore;
    private String userName;

    public int getHelloCount() {
        return helloCount;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    /* (non-Javadoc)
     * @see com.opensymphony.xwork2.ActionSupport#execute()
     */
    public String execute() {
        messageStore = new MessageStore();
        helloCount++;
        if (userName != null) {
            messageStore.setMessage(messageStore.getMessage() + " " + userName);
        }
        return SUCCESS;
    }

    public MessageStore getMessageStore() {
        return messageStore;
    }

}
