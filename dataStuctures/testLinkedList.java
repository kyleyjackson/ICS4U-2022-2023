package dataStuctures;

public class testLinkedList {
    public static void main(String[] args) {
        // testAddNode();
        testRemoveNode();
    }

    public static void testAddNode() {
        intLinkedList list = new intLinkedList();

        list.add(1);
        list.add(2);
        list.add(3);
        System.out.println(list);

        list.addFront(4);
        list.addFront(5);
        System.out.println(list);

        list.add(1, 6);
        System.out.println(list);

        list.add(0, 7);
        System.out.println(list);

    }

    public static void testRemoveNode() {
        intLinkedList list = new intLinkedList();
        list.remove(0); // Attempt to remove something that isn't there
        System.out.println(list);

        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        System.out.println(list);

        list.remove(3);
        System.out.println(list);

        list.remove(1);
        list.remove(5);
        System.out.println(list);

        list.remove(6); // Attempt to remove something that isn't there
        System.out.println(list);
    }
}