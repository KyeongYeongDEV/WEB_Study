import java.util.*;

class ArrayIndexBoundError extends Exception{
    private String message;

    public ArrayIndexBoundError() {
        this.message = "ArrayIndexBoundsError가 발생했습니다.";
    }
    public ArrayIndexBoundError(String message){
        this.message = message;
    }
    public String getMessage(){
        return this.message;
    }
}

class ParkingSpace{
    private String space;
    private int minute;

    public ParkingSpace(){
        space = "___";
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

interface ParkingLotInterface{
    public void makeParkingSpace(int parkingSpace);//기본 주차공간 만들기
    public void setParkingSpace(String car, int parkingNum); //주차하기
    public void setEmpty(int parkingNum); //출차하기
    public void addParkingSpace(); // 주차공간 생성
    public void removeParkingSpace(int parkingNum); //주차 공간 삭제
    public void addMinute(int minute, int parkinNum); // 이용시간 저장
    public void printParkingSpaceInfo(char ch);//현재 주차장 정보
}

class ParkingLot implements ParkingLotInterface{
    private List<ParkingSpace> parkingLot;
    private int parkingSpace;

    public ParkingLot(){
        parkingLot  = new ArrayList<ParkingSpace>();
        parkingSpace = 0;
    }
    @Override
    public void makeParkingSpace(int parkingSpace){
        this.parkingSpace = parkingSpace;
        for(int i =0; i < this.parkingSpace; i++){
            parkingLot.add(new ParkingSpace()); //A구역 주차공간 기본 10개
        }
    }
    public int getParkingSpaceNum(){
        return parkingSpace;
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
    public void printParkingSpaceInfo(char ch) {
        System.out.println(ch+" 구역 자리 정보");
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

class Car{
    private ParkingLot parkingSpace;

    public Car(ParkingLot aParkingLot){
        this.parkingSpace = aParkingLot;
    }

    public ParkingLot getParkingSpace(){
        return this.parkingSpace;
    }
}

class ManageParkingLot{
    private ParkingLot aParkingLot;
    private ParkingLot bParkingLot;
    private Car cars;
    private ManageParkingFee manageParkingFee;
    private Scanner scan;

    private int parkingNum;
    private String car;
    private char area;
    private int minute;

    public ManageParkingLot(){
        aParkingLot = new ParkingLot();
        bParkingLot = new ParkingLot();
        aParkingLot.makeParkingSpace(10);
        bParkingLot.makeParkingSpace(6);        

        manageParkingFee = new ManageParkingFee();
        scan = new Scanner(System.in);

        parkingNum =-1;
        car ="";
        area = '\0';
        minute = 0;
    }

    public void showParkingSpace(){ //주차 공간 확인
        aParkingLot.printParkingSpaceInfo('A');
        bParkingLot.printParkingSpaceInfo('B');
    }
    public void parking(){ // 주차하기
        try{
            System.out.println("A B 어느 구역에 주차하겠습니까?");
            area = scan.next().charAt(0);

            if(area != 'A' || area != 'B'){
                throw new ArrayIndexBoundError("주차공간 입력 err");
            }

            System.out.println("주차하실 자리와 차량 정보를 입력해 주세요");
            parkingNum = scan.nextInt();
            
            if(cars.getParkingSpace().getParkingSpaceNum() > parkingNum){
                throw new ArrayIndexBoundError();
            }
            car = scan.next();

        }catch(ArrayIndexBoundError err){
            System.out.print(err.getMessage());
            System.exit(0);
        }

        boolean check = true;
        switch(area){
            case 'A':
                aParkingLot.setParkingSpace(car, parkingNum);
                cars = new Car(aParkingLot);
                
                break;
            case 'B':
                bParkingLot.setParkingSpace(car, parkingNum);
                cars = new Car(bParkingLot);
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
        cars.getParkingSpace().setParkingSpace("___", parkingNum);
        System.out.println("출차 완료");
    }
    public void setMinute(){ //주차한 시간 저장
        System.out.print("이용시간 입력 >> ");
        minute = scan.nextInt();

        cars.getParkingSpace().addMinute(minute, parkingNum);
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

