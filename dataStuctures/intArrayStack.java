package dataStuctures;

public class intArrayStack {
    private int top;
    private int numItems;
    private Integer[] stack;

    public intArrayStack() {
        this.top = -1;
        this.numItems = 0;
        stack = new Integer[0];
    }

    public Integer[] push(Integer data) {
        if (stack.length - top < 2) {
            Integer[] temp = new Integer[stack.length + 1];

            for (int i = 0; i < stack.length; i++) {
                temp[i] = stack[i];
            }

            stack = temp;
            stack[++top] = data;
            return temp;
        }

        return null;
    }

    public Integer pop() {
        if (top < 0)
            return null;
        else {
            int popped = stack[top];
            Integer[] temp = new Integer[stack.length - 1];

            for (int i = 0, j = 0; i < stack.length; i++) {
                if (stack[i] != popped) {
                    temp[j] = stack[i];
                    j++;
                }
            }

            top--;
            stack = temp;
            return popped;
        }
    }

    public Integer peek() {
        if (top < 0) {
            return null;
        } else {
            return stack[top];
        }
    }

    public boolean empty() {
        return top < 0;
    }

    public Integer search() {
        return top;
    }

    public String toString() {
        String result = "{";

        for (int i = 0; i <= top; i++) {
            result += stack[i] + ", ";
        }

        if (!empty()) {
            result = result.substring(0, result.length() - 2);
        }

        result += "}";
        return result;
    }

    public Integer get(int index) {
        return stack[index];
    }
}