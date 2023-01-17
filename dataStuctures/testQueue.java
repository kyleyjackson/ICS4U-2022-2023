package dataStuctures;

public class testQueue {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;

        if (!testLinkedList()) {
            System.out.println("Test Failed: testLinkedList()");
            testFailed++;
        } else {
            testPassed++;
        }
        if (!testArrayQueue()) {
            System.out.println("Test Failed: testArrayQueue()");
            testFailed++;
        } else {
            testPassed++;
        }

        System.out.println("Test Passed: " + testPassed);
        System.out.println("Test Failed: " + testFailed);
    }

    private static intArrayQueue prepareArrayQueue() {
        intArrayQueue queue = new intArrayQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);

        return queue;

    }

    private static boolean testArrayQueue() {
        intArrayQueue queue = prepareArrayQueue();
        if (queue.get(0) != 1)
            return false;
        if (queue.get(4) != 5)
            return false;
        if (queue.get(2) != 3)
            return false;

        queue.dequeue();
        if (queue.get(0) != 2)
            return false;
        queue.dequeue();
        if (queue.get(0) != 3)
            return false;

        if (queue.peak() != 3)
            return false;

        queue.clear();
        if (!queue.empty())
            return false;

        return true;
    }

    private static boolean testLinkedList() {
        intLinkedListQueue queue = new intLinkedListQueue();

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);

        if (queue.get(0) != 1)
            return false;
        if (queue.get(4) != 5)
            return false;
        if (queue.get(2) != 3)
            return false;

        queue.dequeue();
        if (queue.get(0) != 2)
            return false;
        queue.dequeue();
        if (queue.get(0) != 3)
            return false;

        if (queue.peek() != 3)
            return false;

        queue.clear();
        if (!queue.empty())
            return false;

        return true;
    }
}
