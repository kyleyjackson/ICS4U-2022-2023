package dataStuctures;

public class intBST {
    private intBSTNode root;

    public intBST() {
        this.root = null;
    }

    /*
     * @param root - root of the subtree that n is being added to
     * 
     * @param - n the Integer that we are adding to root
     * 
     * @return - reference to the intBSTNode that was inserted
     */

    public intBSTNode add(int n) {
        return addRecursive(root, n);
    }

    public intBSTNode addRecursive(intBSTNode root, Integer n) {
        if (n < root.getValue()) {
            if (root.hasLC())
                return addRecursive(root.getLC(), n);
            else {
                intBSTNode child = new intBSTNode(n);
                root.setLC(child);
                return child;
            }
        } else if (n < root.getValue()) {
            if (root.hasRC())
                return addRecursive(root.getRC(), n);
            else {
                intBSTNode child = new intBSTNode(n);
                root.setRC(child);
                return child;
            }
        }
    }

    public intBSTNode find(Integer n) {
        return findRecursive(root, n);
    }

    private intBSTNode findRecursive(intBSTNode root, Integer n) {
        if (root.getValue() == n)
            return root;
        else if (root.hasLC() && root.getValue() > n)
            return findRecursive(root.getLC(), n);
        else if (root.hasRC() && root.getValue() < n)
            return findRecursive(root.getRC(), n);
        return null;
    }
}
