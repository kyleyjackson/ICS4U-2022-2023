package dataStuctures;

public class testBST {
    public static void main(String[] args) {
        intBST bst = new intBST();

        bst.add(6);
        bst.add(8);
        bst.add(3);
        bst.add(1);
        bst.add(13);
        bst.add(9);
        bst.add(7);
        bst.add(11);

        bst.inOrderPrintTraversal();
    }
}