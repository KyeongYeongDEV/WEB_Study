

class PortNumberError extends Error{
    private String message;

    public PortNumberError(){
        message = "Port Number Error";
    }
    public PortNumberError(String message){
        this.message = message;
    }

    public String getMessage(){
        return this.message;
    }
}

class Client{
    private int portNumber;

    public Client(){
        portNumber = 8080;
    }

    public void HttpReq(){
        System.out.println("Client : 나는 xxx를 원해");
    }

    public void setPortNumber(int portNumber){
        try{
            this.portNumber = portNumber;

            if(this.portNumber <0 || this.portNumber >9999){
                throw new PortNumberError();
            }
        }catch(PortNumberError err){
            System.out.print(err.getMessage());
            System.exit(0);
        }
    }

    public int getPortNumber(){
        return portNumber;
    }
}

class WebServer{
    private int portNumber;

    public WebServer(int portNumber){
        this.portNumber = portNumber;
    }

    public void ApplicationReq(){
        System.out.println("protNumber : " + this.portNumber);
        System.out.println("애플리케이션 로직 실행 요청");
    }

    public void HttpRes(){
        System.out.println("Web Server : 여기 xxx 줄게\n");
    } 
}

class DataBase{
    private String data;
    public DataBase(){ 
        this.data = "나는 데이터다!!";
    }

    public void setData(String data){
        this.data = data;
    }

    public String DataRes(){
        System.out.println("DB : 옛다 데이터");
        return data;

    }
}
//웹 어플리케이션에서 데이터를 가공해서 서버에 보낸다.
class WebApplication{
    private String data;

    public WebApplication(){
        this.data = "";
    }

    public void DataReq(){
        System.out.println("WAS : DB야 데이터를 다오");
    }
    public void setDB(String data){
        this.data = data;
        System.out.println("(" + this.data + ") 데이터 잘 받았음 ");
    }
    public void manufactureData(){
        System.out.println("데이터 가공 중  뚱가뚱가");
    }
    public void ApplicationRes(){   
        System.out.println("로직 처리 결과 반환");
    }
}

class run{
    private Client client;
    private WebServer webServer;
    private WebApplication was;
    private DataBase DB;

    public run(){
        client = new Client();
        webServer = new WebServer(client.getPortNumber());
        was = new WebApplication();
        DB = new DataBase();
    }
    
    public void start(){
        client.HttpReq();
        webServer.ApplicationReq();
        was.DataReq();
        was.setDB(DB.DataRes());
        was.manufactureData();
        was.ApplicationRes();
        webServer.HttpRes();
    }
}

public class was{
    public static void main(String [] args){
        new run().start();
    }
}