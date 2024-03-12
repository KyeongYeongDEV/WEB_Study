class Node{
    private int data;
    private Node next;

    public Node(int data){
        this.data = data;
        this.next = null;
    }
    public int getData(){
        return this.data;
    }
    public Node getNext(){
        return this.next;
    }
    public void setNext(Node n){
        this.next = n;
    }
}

class Stack{
    private Node topNode;

    public Stack(){
        this.topNode = null;
    }
    public boolean isEmpty(){
        return (this.topNode == null);
    }
    public void push(int data){
        Node new_node = new Node(data);
        if(!isEmpty()){
            new_node.setNext(this.topNode);
        }        
        topNode = new_node;
    }
    public int pop(){
        if(!isEmpty()){
            int data = this.topNode.getData();
            this.topNode = this.topNode.getNext();
            return data;
        }
        return 0;
    }
}

class run{
    Stack s = new Stack();

    public run(){
        for(int i=0; i < 5; i++){
            s.push(i);
        }
        for(int i=0; i < 5; i++){
            System.out.println(s.pop());
        }
    }
}


public class list_stack{
    public static void main(String[] args){
        new run();
    }
}