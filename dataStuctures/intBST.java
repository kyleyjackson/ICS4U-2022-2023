package dataStuctures;

public class intBST {
    private intBSTNode root;

    public intBST() {
        this.root = null;
    }

    public intBSTNode add(Integer val) {
        if (root == null) {
            root = new intBSTNode(val);
        }
        return addRecursive(root, val);
    }

    public intBSTNode find(Integer val) {
        return findRecursive(root, val);
    }

    public void preOrderPrintTraversal() {
        preOrderPrintTraversal(root);
    }

    private Integer findSmallest(intBSTNode root) {
        Integer min = root.getValue();

        while (root.getLC() != null) {
            min = root.getLC().getValue();
            root = root.getLC();
        }

        return min;
    }

    public void remove(Integer val) {
        // removing the root node of our BST
        root = removeRecursive(root, val);

    }

    private intBSTNode removeRecursive(intBSTNode root, Integer val) {
        if (root == null)
            return root;

        if (val < root.getValue()) {
            root.setLC(removeRecursive(root.getLC(), val));
        } else if (val > root.getValue()) {
            root.setRC(removeRecursive(root.getRC(), val));
        } else {
            if (root.getLC() == null) {
                return root.getRC();
            } else if (root.getRC() == null) {
                return root.getLC();
            } else {
                Integer biggest = findSmallest(root.getRC());
                root.setValue(biggest);
                root.setRC(removeRecursive(root.getRC(), root.getValue()));
            }
        }

        return root;
    }

    private void preOrderPrintTraversal(intBSTNode root) {
        System.out.println(root.getValue());
        if (root.hasLC()) {
            preOrderPrintTraversal(root.getLC());
        }

        if (root.hasRC()) {
            preOrderPrintTraversal(root.getRC());
        }
    }

    public void postOrderPrintTraversal() {
        postOrderPrintTraversal(root);
    }

    private void postOrderPrintTraversal(intBSTNode root) {
        if (root.hasLC()) {
            postOrderPrintTraversal(root.getLC());
        }

        if (root.hasRC()) {
            postOrderPrintTraversal(root.getRC());
        }

        System.out.println(root.getValue());

    }

    public void inOrderPrintTraversal() {
        inOrderPrintTraversal(root);
    }

    private void inOrderPrintTraversal(intBSTNode root) {
        if (root.hasLC()) {
            inOrderPrintTraversal(root.getLC());
        }

        System.out.println(root.getValue());

        if (root.hasRC()) {
            inOrderPrintTraversal(root.getRC());
        }

    }

    private intBSTNode findRecursive(intBSTNode root, Integer val) {
        if (root.getValue() == val)
            return root;
        else if (root.hasLC() && root.getValue() > val)
            return findRecursive(root.getLC(), val);
        else if (root.hasRC() && root.getValue() < val)
            return findRecursive(root.getRC(), val);
        else
            return null;
    }

    /**
     * 
     * @param root root of the subtree we are adding val to
     * @param val  the Integer we are adding to the BST (no duplicates)
     * @return reference to the InstBSTNode we inserted
     */
    private intBSTNode addRecursive(intBSTNode root, Integer val) {
        if (val < root.getValue()) {
            if (root.hasLC())
                return addRecursive(root.getLC(), val);
            else {
                intBSTNode child = new intBSTNode(val);
                root.setLC(child);
                return child;
            }
        } else if (val > root.getValue()) {
            if (root.hasRC())
                return addRecursive(root.getRC(), val);
            else {
                intBSTNode child = new intBSTNode(val);
                root.setRC(child);
                return child;
            }
        } else {
            return root;
        }
    }
}