package data;

public class intArrayStack {
    private int top;
    private int numItems;
    private Integer[] stack;

    public intArrayStack() {
        this.top = -1;
        this.numItems = 0;
    }

    public Integer[] push(Integer data) {
        Integer[] temp = new Integer[numItems + 1];

        for (int i = 0; i < numItems; i++)
            temp[i] = stack[i];

        temp[numItems] = data;
        top = data;
        stack = temp;
        numItems++;

        return temp;
    }

    public Integer[] pop() {

    }

    public Integer peek() {
        if (top < 0) {
            return null;
        } else {
            return top;
        }
    }

    public boolean isEmpty() {
        return top < 0;
    }

    public int search(Integer data) {

    }
}
