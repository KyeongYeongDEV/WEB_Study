import java.util.*;

interface dividend{

    public double calculateDividend(double userMoney); 
    public double payDividends();
}

interface RSP{
    public String getComRSP();
    public String setUserRSP();
    public String calRSP(String user, String computer);
}

class user{
    private double userMoney;
    private String RSP;

    public user(){
        this.userMoney = 0;
        this.RSP ="";
    }

    public void setUserMoney(double money){
        this.userMoney += money;
    }

    public double getUserMoney(){ return this.userMoney;}

    public void setRSP(String RSP){this.RSP = RSP;}
    public String getRSP(){return this.RSP;} // 사용자의 가위바위보 가져오기
}

class computer{
    private String RSP;

    public computer(){
        this.RSP ="";
    }

    public void setRSP(String RSP){//컴퓨터가 낸 가위바위보 저장
        this.RSP = RSP;
    }
    public String getRSP(){return this.RSP;} 
}

class calculateRSP implements RSP{
    public calculateRSP(){}

    @Override
    public String getComRSP(){
        int randomNum = (int)Math.random()%2+1;

        switch(randomNum){
            case 1: return "가위";
            case 2: return "바위";
            case 3: return "보";
        }
        return "수가 이상합니다.";
    }
    @Override
    public String setUserRSP(){
        Scanner s = new Scanner(System.in);

        System.out.print("가위바위보 중 하나를 입력하세요 >> ");
        String tmpRSP = s.next();

        s.close();
        return tmpRSP;
    }
    @Override
    public String calRSP(String user, String computer){
        if(user == "가위"){
            switch(computer){
                case "가위":
                    return "비겼습니다.";
                case "바위":
                    return "지셨습니다.";
                case "보":
                    return "이기셨습니다.";
            }
        }else if(user == "바위"){
            switch(computer){
                case "가위":
                    return "이겼습니다.";
                case "바위":
                    return "비겼습니다.";
                case "보":
                    return "지셨습니다.";
            }
        }else if(user == "보"){
            switch(computer){
                case "가위":
                    return "지셨습니다.";
                case "바위":
                    return "이기셨습니다.";
                case "보":
                    return "비겼습니다.";
            }
        }
        return "값에 문제가 있습니다.";
    }
    
}

class manageMoney implements dividend{
    private double dividend;
    private Scanner s;

    public manageMoney(){
        this.dividend = 1.98;
        s = new Scanner(System.in);
    }

    @Override
    public double calculateDividend(double payDivided){ //유저가 배당한 돈에 배당금을 더하고 리턴
        return payDivided * dividend;
    }
    @Override
    public double payDividends(){
        System.out.println("배당하실 금액을 입력해주시요");
        double dividendMoney = s.nextDouble();

        return dividendMoney;
    }

    public double payMoney(){
        System.out.print("충전하실 금액을 입력해 주세요 >> ");
        double money = s.nextDouble();
        System.out.println("충전이 완료 되었습니다.");
    
        s.close();
        return money;
    }
}

public void menu(){
    System.out.println("<<메뉴>>");
    System.out.println("1. 게임 시작    2. 충전     3. 종료");
}

class run{
    private user u;
    private computer com;
    private calculateRSP calRsp;
    private manageMoney manageMon;
    private Scanner s;

    public run(){
        u = new user();
        com = new computer();
        calRsp = new calculateRSP();
        s = new Scanner(System.in);
        manageMon = new manageMoney();
    }   

    public void play(){
        
        while(true){
            menu();
            int num = s.nextInt();

            switch(num){
                case 1:
                    System.out.println("게임을 시작합니다.");
                    double userMoney = u.getUserMoney(); //유저가 가진 현재 돈

                    double payDivideds = manageMon.payDividends(); //유저가 배당할 돈

                    if(userMoney - payDivideds <= 0){
                        System.out.println("사용자의 잔액이 부족합니다."); break;
                    }

                    u.setUserMoney(-payDivideds);//잔액인 된다면 유저 돈에서 빼기

                    //가위바위보  세팅
                    
                    String user = u.getRSP();
                    String computer = com.getRSP();

                    u.setRSP(user);
                    com.setRSP(computer);


                    String result = calRsp.calRSP(u.getRSP(), com.getRSP());

                    switch(result){
                        case "이기셨습니다.":
                            System.out.println("사용사 승!!\n배당금이 충전되었습니다.");
                            //배당금 계산 후
                            double tmp = manageMon.calculateDividend(payDivideds);
                            u.setUserMoney(tmp);

                            break;
                        case "비겼습니다.":
                            System.out.println("사용자가 비겼습니다.");
                            break;
                        case "지셨습니다.":
                            System.out.println("사용자가 지셨습니다.");
                            break;
                    }

            
                case 2:
                    double getMoney = manageMon.payMoney();
                    u.setUserMoney(getMoney);
                    break;
                case 3: System.out.println("종료합니다."); return ;
            }
        }
        
    }
}

public class 가위바위보 {
    public static void mian(String[] args){
        new run().play();
    }
}
