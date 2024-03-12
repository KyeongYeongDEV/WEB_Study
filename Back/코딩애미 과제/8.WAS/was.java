

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


class DO{
    private DataBase dataBase;
    String data;

    public DO(){
        dataBase = new DataBase();
        data = "";
    }
    public void doGet(){
        System.out.println("DB야 데이터를 다오");
        this.data = dataBase.DataRes();
        System.out.println(this.data + " || 데이터 받고 가공중");
    }
    public void doPost(){
        System.out.println("가공 다함 반환할게");
        
    }
}

class Servlet{
    private DO Do;

    public Servlet(){
        Do = new DO();
    }

    public void init(){
        System.out.println("Servlet 실행 및 초기화");
    }
    public void service(){ //doGet() doPost() tlfgod
        Do.doGet();
        Do.doPost();
    }
    public void destroy(){
        System.out.println("Servlet 종료!!");
    }

}

class Thread{
    private Servlet servlet;

    public Thread(){
        servlet = new Servlet();
    }

    public void startServlet(){ //야가 Servlet 실행
        servlet.init();
        servlet.service();
    }
    public void destroy(){
        servlet.destroy();
    }

}

//다이나믹 프로그래밍 JSP, Servlet
class WebContainer{
    private Thread thread;

    public WebContainer(){
        thread = new Thread();
    }
    public void HttpServletRequest(){
        thread.startServlet();;
    }
    public void HttpServletResponse(){
        thread.destroy();
    }
}


class WebApplication{
    private WebContainer webContainer;
    private String data;
    
    public WebApplication(){
        webContainer = new WebContainer();
        this.data = "";
    }

    public void setDB(String data){
        this.data = data;
        System.out.println("(" + this.data + ") 원하는 데이터 잘 받았음 ");
    }
    public void manufactureData(){ //여기에서 스레드 실행
        webContainer.HttpServletRequest();;
    }
    public void ApplicationRes(){   
        System.out.println("웹 서버에게 로직 처리 결과 반환");
    }
    public void HttpservletRes(){
        webContainer.HttpServletResponse();
    }
}

class run{
    private Client client;
    private WebServer webServer;
    private WebApplication was;
    

    public run(){
        client = new Client();
        webServer = new WebServer(client.getPortNumber());
        was = new WebApplication();
    }
    
    public void start(){
        client.HttpReq();
        webServer.ApplicationReq();
        was.manufactureData();
        was.HttpservletRes();
        was.ApplicationRes();
    }
}

public class was{
    public static void main(String [] args){
        new run().start();
    }
}