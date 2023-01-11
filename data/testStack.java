package data;

public class testStack {
    public static void main(String[] args) {
        testArrPush();
    }

    public static void testArrPush() {
        intArrayStack list = new intArrayStack();

        list.push(0);
        System.out.println(list);
    }
}
