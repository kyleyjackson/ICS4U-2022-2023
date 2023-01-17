package dataStuctures;

public class intBSTNode {
    private Integer value;
    private intBSTNode LC;
    private intBSTNode RC;

    public intBSTNode(Integer value, intBSTNode lC, intBSTNode rC) {
        this.value = value;
        LC = lC;
        RC = rC;
    }

    public intBSTNode(Integer value) {
        this.value = value;
        LC = null;
        RC = null;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public intBSTNode getLC() {
        return LC;
    }

    public void setLC(intBSTNode lC) {
        LC = lC;
    }

    public intBSTNode getRC() {
        return RC;
    }

    public void setRC(intBSTNode rC) {
        RC = rC;
    }

    public boolean hasLC() {
        return LC == null;
    }

    public boolean hasRC() {
        return RC == null;
    }
}
