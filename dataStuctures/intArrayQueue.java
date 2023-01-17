package dataStuctures;

public class intArrayQueue {
    private Integer[] queue;

    public intArrayQueue() {

    }

    public boolean empty() {
        if (queue == null)
            return true;

        return false;
    }

    public void clear() {
        Integer[] temp = new Integer[0];
        queue = temp;
    }

    public boolean enqueue(Integer n) {
        Integer[] temp = new Integer[queue.length + 1];

        for (int i = 0; i < queue.length; i++) {
            temp[i] = queue[i];
        }

        temp[temp.length - 1] = n;

        return true;
    }

    public Integer dequeue() {
        Integer[] temp = new Integer[queue.length - 1];
        int count = 0;

        for (int i = 0; i < temp.length; i++) {
            temp[i] = queue[i];
            count++;
        }

        return temp[count - 1];
    }

    public Integer peak() {
        return queue[queue.length - 1];
    }

    public Integer get(int index) {
        return queue[index];
    }
}
