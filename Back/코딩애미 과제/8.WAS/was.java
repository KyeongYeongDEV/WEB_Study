

class Client{
    public void HttpReq(){

    }
    public void HttpRes(){

    }
}

class WebServer{
    public void ApplicationReq(){

    }
    public void ApplicationRes(){

    }
}

class DataBase{
    private String data;

    public DataBase(){
        this.data = "나는 데이터";
    }

    public void setData(String data){
        this.data = data;
    }
    public String getData(){
        return this.data;
    }

}

class WAS{
    private DataBase DB;

    public WAS(){
        this.DB = new DataBase();
    }

    public void DataReq(){

    }
    public void DataRes(){

    }
}




public class was{
    public static void main(String [] args){

    }
}