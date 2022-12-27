import java.util.*;

class menuList{
    private HashMap<String, Integer> menu;

    public menuList(){
        menu = new HashMap<String, Integer>();
    }

    public void setMenu(String key, int value){
        menu.put(key, value);
    }
    public int getPrice(String key){
        return menu.get(key);
    }
    public void menuSet(){
        String[] key = {"자장면", "짬뽕", "볶음밥", "탕수육", "군만두"};
        int[] value = {6000, 7000, 7000, 13000, 4000};

        for(int i =0; i< 5; i++){
            setMenu(key[i], value[i]);
        }
    }
}

class Cook{
    public void cookStart(){
        System.out.println("요리를 시작합니다.");
        System.out.println("요리를 완료하였습니다.");
    }
}

class PartTimeJob{
    private ArrayList<String> orderList;
    private ArrayList<Integer> orderPrice;
    private menuList menu;

    public PartTimeJob(){
        orderList = new ArrayList<String>();
        orderPrice = new ArrayList<Integer>();
        menu = new menuList();
        menu.menuSet();
    }

    public void setOrderList(String key){
        orderList.add(key);
        int price = menu.getPrice(key);
        orderPrice.add(price);
    }

    public int checkOrderPrice(){
        int price=0;
        for(int i=0; i< orderPrice.size(); i++){
            price += orderPrice.get(i);
        }

        return price;
    }

    public void checkOrder(){
        for(int i =0; i < orderList.size(); i++){
            System.out.print(orderList.get(i)+ " ");
        }System.out.println();;
    }

    public void showMenu(){
        
    }
    public void checkMenu(){
        System.out.println("메뉴 확인하겠습니다.");
        checkOrder();
        System.out.println("총 가격 : " + checkOrderPrice()) ;
    }

    public void serving(){
        System.out.println("주문하신 음식 나왔습니다. 맛있게 드세요~");
    }
}

class User{
    private Cook cook;
    private PartTimeJob partTimeJob;
    private Scanner scan;

    public User(){
        cook = new Cook();
        partTimeJob = new PartTimeJob();
        scan = new Scanner(System.in);
    }

    public void start(){
        partTimeJob.showMenu();
        System.out.println("주문할 메뉴의 개수를 입력해 주세요");
        int menuCount = scan.nextInt();
        
        System.out.println("메뉴를 입력해 주세요");
        for(int i=0; i < menuCount; i++){
            String key = scan.next();
            partTimeJob.setOrderList(key);
        }

        partTimeJob.checkMenu();
        cook.cookStart();
        partTimeJob.serving();
    }
}


public class 음식주문 {
    public static void main(String[] args){
        new User().start();
    }
}
