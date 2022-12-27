import java.util.*;

class ParkingSpace{
    private String space;
    private int minute;

    public ParkingSpace(){
        space = "공석";
        minute = 0;
    }

    public void setSpace(String space){
        this.space = space;
    }
    public String getSpace(){
        return this.space;
    }
    public void setMinute(int minute){
        this.minute = minute;
    }
    public int getMinute(){
        return minute;
    }
}

interface ParkingLotFunc{
    abstract public void setParkingSpace(String car, int parkingNum); //주차하기
    abstract public void setEmpty(int parkingNum); //출차하기
    abstract public void addParkingSpace(); // 주차공간 생성
    abstract public void removeParkingSpace(int parkingNum); //주차 공간 삭제
    abstract public void addMinute(int minute, int parkinNum); // 이용시간 저장
    abstract public void printParkingSpaceInfo();//현재 주차장 정보
}

class AParkingLot implements ParkingLotFunc{
    private List<ParkingSpace> parkingLot;

    public AParkingLot(){
        parkingLot  = new ArrayList<ParkingSpace>();
        for(int i =0; i < 10; i++){
            parkingLot.add(new ParkingSpace()); //A구역 주차공간 기본 5개
        }
    }
    @Override
    public void setParkingSpace(String car, int parkingNum){
        parkingLot.get(parkingNum-1).setSpace(car);
    }
    @Override
    public void setEmpty(int parkingNum){
        parkingLot.get(parkingNum-1).setSpace("___");
    }
    @Override
    public void addParkingSpace(){  
        parkingLot.add(new ParkingSpace());
    }
    @Override
    public void removeParkingSpace(int parkingNum){
        parkingLot.remove(parkingNum-1);
    }
    @Override
    public void addMinute(int minute, int parkingNum){
        parkingLot.get(parkingNum-1).setMinute(minute);
    }
    @Override
    public void printParkingSpaceInfo() {
        System.out.println("A 구역 자리 정보");
        for(int i=0; i < parkingLot.size(); i++){
            System.out.print(parkingLot.get(i).getSpace() + " ");
        }System.out.println();
    }

}

class BParkingLot implements ParkingLotFunc{
    private List<ParkingSpace> parkingLot;

    public BParkingLot(){
        parkingLot  = new ArrayList<ParkingSpace>();
        for(int i =0; i < 5; i++){ //B구역 주차공간 기본 5개
            parkingLot.add(new ParkingSpace());
        }
    }
    @Override
    public void setParkingSpace(String car, int parkingNum){
        parkingLot.get(parkingNum-1).setSpace(car);
    }
    @Override
    public void setEmpty(int parkingNum){
        parkingLot.get(parkingNum-1).setSpace("___");
    }
    @Override
    public void addParkingSpace(){  
        parkingLot.add(new ParkingSpace());
    }
    @Override
    public void removeParkingSpace(int parkingNum){
        parkingLot.remove(parkingNum-1);
    }
    @Override
    public void addMinute(int minute, int parkingNum){
        parkingLot.get(parkingNum-1).setMinute(minute);
    }
    @Override
    public void printParkingSpaceInfo() {
        System.out.println("B 구역 자리 정보");
        for(int i=0; i < parkingLot.size(); i++){
            System.out.print(parkingLot.get(i).getSpace() + " ");
        }System.out.println();
    }
}

class ManageParkingFee{
    private int standardFee;
    private int standardMinute;

    public ManageParkingFee(){
        standardFee = 500;
        standardMinute = 30;
    }

    public int calculateFee(int minute){
        return (minute / standardMinute) * standardFee;
    }
}

class ManageParkingLot{
    private AParkingLot aParkingLot;
    private BParkingLot bParkingLot;
    private ManageParkingFee manageParkingFee;
    private Scanner scan;

    private int parkingNum;
    private String car;
    private char area;
    private int minute;

    public ManageParkingLot(){
        aParkingLot = new AParkingLot();
        bParkingLot = new BParkingLot();
        manageParkingFee = new ManageParkingFee();
        scan = new Scanner(System.in);
        parkingNum =-1;
        car ="";
        area = '\0';
        minute = 0;
    }

    public void showParkingSpace(){ //주차 공간 확인
        aParkingLot.printParkingSpaceInfo();
        bParkingLot.printParkingSpaceInfo();
    }
    public void parking(){ // 주차하기
        System.out.println("A B 어느 구역에 주차하겠습니까?");
        area = scan.next().charAt(0);
        System.out.println("주차하실 자리와 차량 정보를 입력해 주세요");
        parkingNum = scan.nextInt();
        car = scan.next();
        
        boolean check = true;
        switch(area){
            case 'A':
                aParkingLot.setParkingSpace(car, parkingNum);
                break;
            case 'B':
                bParkingLot.setParkingSpace(car, parkingNum);
                break;
            default:
                System.out.println("잘못 입력하셨습니다.");
                check = false;
                break;
        }
        if(check){
            System.out.println("주차 완료");
            showParkingSpace();
        }
    }
    public void setEmptyParkingSapce(){//출차 후 주차자리 수정
        boolean check = true;
        
        switch(area){
            case 'A':
                aParkingLot.setParkingSpace("공석", parkingNum);
                break;
            case 'B':
                bParkingLot.setParkingSpace("공석", parkingNum);
                break;
            default:
                System.out.println("잘못 입력하셨습니다.");
                check = false;
                break;
        }
        if(check) System.out.println("출차 완료");
    }
    public void setMinute(){ //주차한 시간 저장
        System.out.print("이용시간 입력 >> ");
        minute = scan.nextInt();

        switch(area){
        case 'A':
            aParkingLot.addMinute(minute, parkingNum);
            break;
        case 'B':
            bParkingLot.addMinute(minute, parkingNum);
            break;
        default:
            System.out.println("잘못 입력하셨습니다.");
            break;
        }
    }
    public void claimFee(){ //요금 청구
        System.out.println("사용하신 시간은 "+ minute + "분입니다.\n지불할 요금은 "
        +manageParkingFee.calculateFee(minute)+ "원입니다.");
    }

}

class User{
    private ManageParkingLot manageParkingLot;

    public User(){
        manageParkingLot = new ManageParkingLot();
    }

    public void start(){
        manageParkingLot.showParkingSpace();
        manageParkingLot.parking();
        manageParkingLot.setMinute();
        manageParkingLot.claimFee();
        manageParkingLot.setEmptyParkingSapce();
    }
}




public class parking{
    public static void main(String[] args){
        new User().start();
    }
}

