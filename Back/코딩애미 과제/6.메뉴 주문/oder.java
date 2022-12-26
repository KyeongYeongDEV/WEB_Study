import java.util.*;

class user{
    private String[] oderedMenu;
    private int oderedMenuNum;

    public user(){
        this.oderedMenuNum = 0;
    }

    public void setOderedMenuNum(int num){
        this.oderedMenuNum = num;
    }

    public int getOderedMenuNum(){
        return this.oderedMenuNum;
    }

    public void setOderedMenu(String[] menu){
        oderedMenu = new String[oderedMenuNum];
        for(int i=0; i< this.oderedMenuNum; i++){
            oderedMenu[i] = menu[i];
        }
    }

    public void getOderedMenu(){
        System.out.print("주문하신 메뉴는 ");
        for(int i=0; i< this.oderedMenuNum; i++){
            System.out.print(oderedMenu[i]+" ");
        }System.out.print("입니다. \n");
    }
}

class menu{ 
    private String[] menu = new String[5];

    public menu(){
        menu[0] ="자장면";
        menu[1] ="짬뽕";
        menu[2] ="볶음밥";
        menu[3] = "탕수육";
        menu[4] = "꿔바로우";
    }

    public void showMenu(){
        for(int i=0; i < 5;i++){
            System.out.print(i+1 +"."+menu[i] + " ");
        }System.out.println();
    }
}

class odered{
    private user User;
    private menu Menu;
    private Scanner scan;

    public odered(){
        User = new user();
        Menu = new menu();
        scan = new Scanner(System.in);
    }
    
    public void oderedMenuNum(){
        Menu.showMenu();
        System.out.print("몇 개의 음식을 주문하시겠습니까? >> ");
        User.setOderedMenuNum(scan.nextInt());
    }
    public void oderedMenu(){
        System.out.print("주문하실 음식을 입력해주세요. >> ");
        int tmp = User.getOderedMenuNum();
        
        String[] menuTmp = new String[tmp];
        for(int i=0; i < tmp; i++){
            menuTmp[i] = scan.next();
        }
    }
    
    public void checkOdered(){
        System.out.println("주문 확인하겠습니다.");
        User.getOderedMenu();
    }
}

class Run{ //얘가 알바
    private odered Odered;

    public void Run(){
        Odered = new odered();
    }
    public void start(){
        Odered.oderedMenuNum();
        Odered.oderedMenu();
        Odered.checkOdered();
    }
}

public class oder {
    public static void main(String[] args){
        new Run().start();
    }
}
