import java.util.Scanner;


class User{
    private String name;
    private String seatCode;
    private User next;

    public User(){
        this.name = "---";
        this.seatCode = " ";
        this.next = null;
    }

    public String getName(){
        return this.name;
    }
    public String getSeatCode(){
        return this.seatCode;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setSeatCode(String seatCode){
        this.seatCode = seatCode;
    }
    public User getNext(){
        return this.next;
    }
    public void setNext(User next){
        this.next = next;
    }

}

class columnOfSeat{
    private User headUser = new User();

    public columnOfSeat(){
        User tmp = headUser;
        for(int i=0; i < 10; i++){ //자리 10개
            User userOjt = new User();
            tmp.setNext(userOjt);
            tmp = tmp.getNext();
        }
    }
    
    public void reserve(String name, String seatCode, int seatNum){//예약
        User tmp = headUser;

        if(seatNum >10 || seatNum <0){System.out.println("예약에 실패하셨습니다.");}
        else{
            for(int i=1 ; i <= seatNum-1; i++){//예약하는 위치의 하나 전으로 가서
                tmp = tmp.getNext();
            }
            User tmpNext = tmp.getNext();
            User newUser = new User();
            newUser.setName(name);
            newUser.setSeatCode(seatCode);
            newUser.setNext(tmpNext.getNext());

            tmp.setNext(newUser);
            
            System.out.println("티켓이 발행됐습니다. 티켓코드 >> "+newUser.getSeatCode());
        }
    }
    public boolean cancel(String seatCode){//예약 취소
        User tmp  =headUser;
        
        for(int i=0; i < 10; i++){
            tmp = tmp.getNext();
            if(tmp.getSeatCode() == seatCode){
                tmp.setName("---");
                tmp.setSeatCode(" ");
                return true;
            }
        }    
        return false;
        
    }
    public boolean find(String seatCode){// 좌석 찾기
        return true;
    }

    public void printColumn(String Airline){
        User tmp = headUser;
        System.out.print(Airline + " ");
        for(int i=0; i < 10;i++){
            tmp = tmp.getNext();
            System.out.print(tmp.getName() + " ");
        }
        System.out.println();
    }
}

class rowOfseat{
    private columnOfSeat[] rowSeat ;
    private String[] Airline;

    public rowOfseat(){
        rowSeat = new columnOfSeat[3];
        Airline = new String[3];

        for(int i=0; i <3; i++){
            rowSeat[i] = new columnOfSeat();
        }

        Airline[0]= "대한항공";
        Airline[1]= "아시아나";
        Airline[2]= "제주항공";
    }

    public void reserve(String Airline, int seatNum, String name){
        if(Airline.equals("대한항공")){ //항공사 검사
            int hashCode = name.hashCode();
            String seatCode = Integer.toString(hashCode) + Airline + Integer.toString(seatNum);
            


            //TODO 좌석 코드 만들기
            rowSeat[0].reserve(name, seatCode, seatNum);
        }
        else if(Airline.equals("아시아나")){
            String seatCode = "좌석 코드";
            //TODO 좌석 코드 만들기
            rowSeat[1].reserve(name, seatCode, seatNum);
        }
        else if(Airline.equals("제주항공")){
            String seatCode = "좌석 코드";
            //TODO 좌석 코드 만들기
            rowSeat[2].reserve(name, seatCode, seatNum);
        }
    }

    public void printSeat(String airLine){ //원하는 항공사 자리 출력
        int AirlineNum = -1;

        if(airLine.equals("대한항공")) AirlineNum=0;
        else if(airLine.equals("아시아나")) AirlineNum =1;
        else if(airLine.equals("제주항공")) AirlineNum =2;
        else System.out.println("찾으시는 항공사가 없습니다."); 

        if(AirlineNum != -1){
            rowSeat[AirlineNum].printColumn(Airline[AirlineNum]);
        }        
    }
    //public boolean cancel(){}
    //public boolean find(){//세부정보 찾기}

}

class console{
    private rowOfseat air;

    public console(){
        air= new rowOfseat();
    }

    public void Run(){
        Scanner s = new Scanner(System.in);
        while(true){
            System.out.println("<<Menu>>");
            System.out.println("1. 조회     2. 예약     3. 취소     4. 세부조회     0. 종료");
            int menuNum = s.nextInt();

            switch(menuNum){
                case 1: //조회
                    String []str= new String[3];
                    str[0] = "대한항공";
                    str[1] = "아시아나";
                    str[2] = "제주항공";

                    for(int i=0; i < 3; i++){
                        air.printSeat(str[i]);
                    }
                    break;
                case 2://예약
                    System.out.println("예약 정보를 입력해주세요");
                    
                    System.out.println("항공사(대한항공,아시아나,제주항공) >>");
                    String AirLine = s.next();
                    System.out.println("좌석 위치 1~10 >>");
                    int seatNum = s.nextInt();
                    System.out.println("예약자 성함 >>");
                    String userName = s.next();

                    air.reserve(AirLine, seatNum, userName);
                    
                    
                    break;
                case 3: //예약 취소
                    
                    break;
                case 4: //세부조회
                    break;
                case 0://종료
                    return;
            }

        }
    }


}

public class reserAir{
    public static void main(String[] args){
        new console().Run();
    }

}