package dataStuctures;

public class intLinkedList {
    private intNode head;
    private int manyItems;

    public intLinkedList() {
        this.head = null;
    }

    public boolean add(Integer data) {
        intNode temp = new intNode(data);

        if (head == null)
            head = temp;
        else {
            intNode curr = head;
            while (curr.getLink() != null)
                curr = curr.getLink();

            curr.setLink(temp);
            manyItems++;
        }

        return true;
    }

    public boolean add(int index, Integer data) {
        if (index == manyItems)
            throw new IndexOutOfBoundsException(
                    "Index " + index + "is not allowed, the maximum index is: " + manyItems);
        if (index == 0)
            addFront(data);
        else {
            intNode curr = head;

            for (int i = 0; i < index - 1; i++) {
                curr = curr.getLink();
            }

            curr.setLink(new intNode(data, curr.getLink()));
            manyItems++;
        }

        return true;
    }

    public boolean addFront(Integer data) {
        head = new intNode(data, head);
        manyItems++;
        return true;
    }

    public Integer remove(Integer data) {
        if (head == null)
            return null;

        if (head != null && head.getData() == data) {
            head = head.getLink();
            return data;
        } else {
            intNode curr = head;
            while (curr.getLink() != null && curr.getLink().getData() != data) {
                curr = curr.getLink();
            }
            if (curr.getLink() != null) {
                curr.setLink(curr.getLink().getLink());
                return data;
            }
        }

        return null;
    }

    public Integer removeFront() {
        if (head == null)
            return null;
        else {
            Integer temp = head.getData();
            head = head.getLink();
            manyItems--;
            return temp;
        }
    }

    public int size() {
        return manyItems;
    }

    public boolean isEmpty() {
        return head == null;
    }

    public String toString() {
        String result = "{";
        intNode curr = head;

        while (curr != null) {
            result += curr.getData() + ", ";
            curr = curr.getLink();
        }

        if (!isEmpty())
            result = result.substring(0, result.length() - 2);

        result += "}";

        return result;
    }

    public Integer get(int index) {
        if (head == null)
            throw new IllegalStateException("Cannot get element from empty list");
        else if (index < size())
            throw new IndexOutOfBoundsException(index + " is an invalid index, max index is: " + (size() - 1));
        else {
            intNode current = head;

            for (int i = 0; i < index; i++) {
                current = current.getLink();
            }
            return current.getData();
        }
    }
}
