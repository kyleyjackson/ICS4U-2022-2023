package dataStuctures;

public class intLinkedListQueue {
    private intLinkedList data;

    public intLinkedListQueue() {
        data = new intLinkedList();
    }

    public boolean empty() {
        return data.isEmpty();
    }

    public void clear() {
        data = new intLinkedList();
    }

    public boolean enqueue(Integer n) {
        return data.add(n);
    }

    public Integer dequeue() {
        return data.removeFront();
    }

    public Integer peek() {
        return data.get(0);
    }
}