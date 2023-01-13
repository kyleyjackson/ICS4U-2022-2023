package dataStuctures;

public class testStack {
    public static void main(String[] args) {
        testArr();
        System.out.println("\n-----------------------------------------------\n");
        testLinked();
    }

    public static void testArr() {
        intArrayStack list = new intArrayStack();
        intArrayStack list2 = new intArrayStack();

        list.push(0);
        list.push(1);
        list.push(2);
        list.push(3);
        System.out.println(list);

        Integer result = list.pop();
        System.out.println(result);
        System.out.println(list);

        System.out.println("The top of the stack list1 is: " + list.peek());
        System.out.println("The stack list1 is empty: " + list.empty());
        System.out.println("The distance from top to bottom of list1 is: " + list.search());
        System.out.println("list2 tests here");
        System.out.println("\n------------------------------------------------------------\n");
        System.out.println(list2.pop() + " <- Attempt at popping an empty list :D");
        System.out.println("The top of the stack list2 is: " + list2.peek());
        System.out.println("list2 is empty: " + list2.empty());
        System.out.println("The distance from top to bottom of list2 is: " + list2.search());
    }

    public static void testLinked() {
        intLinkedListStack stack = new intLinkedListStack();
        intLinkedListStack stack2 = new intLinkedListStack();

        stack.push(1);
        stack.push(2);
        stack.push(3);
        System.out.println(stack);

        Integer result = stack.pop();
        System.out.println(result);
        System.out.println(stack);

        System.out.println("the list is empty: " + stack.empty());
        System.out.println("the distance between top and bottom in the list is: " + stack.search());
        System.out.println("the top of the list is: " + stack.peek());
        System.out.println("stack2 tests here");
        System.out.println("\n------------------------------------------------------------\n");
        System.out.println(stack2.pop() + " <- Attempt at popping an empty stack :D");
        System.out.println("The top of the stack stack2 is: " + stack2.peek());
        System.out.println("stack2 is empty: " + stack2.empty());
        System.out.println("The distance from top to bottom of stack2 is: " + stack2.search());

        stack2.push(1);
        System.out.println("Distance test with 1 unit: " + stack2.search());
    }
}
