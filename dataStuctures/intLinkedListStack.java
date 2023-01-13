package dataStuctures;

public class intLinkedListStack {
    private intNode head;
    private int top = -1;

    public boolean push(Integer data) {
        head = new intNode(data, head);
        top++;
        return true;
    }

    public Integer pop() {
        if (head == null) {
            return null;
        } else {
            Integer temp = head.getData();
            head = head.getLink();
            top--;
            return temp;
        }
    }

    public boolean empty() {
        return head == null;
    }

    public Integer peek() {
        if (head == null) {
            return null;
        } else {
            Integer temp = head.getData();
            return temp;
        }
    }

    public Integer search() {
        return top;
    }

    public String toString() {
        String result = "{";
        intNode current = head;

        while (current != null) {
            result += current.getData() + ", ";
            current = current.getLink();
        }

        if (!empty()) {
            result = result.substring(0, result.length() - 2);
        }
        result += "}";

        return result;
    }
}
