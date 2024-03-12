package choi;
import java.time.LocalTime;

public class code {
	public static String get_Token() { //랜덤으로 8자리 토큰 발행 
		char[] Token = new char[8];
		
		for(int i=0; i < 8; i++) {
			Token[i] =  (char)(Math.random() *9+48);
		}
		
		return String.valueOf(Token);
	}
	
	public static String Encryption(String Token, int key) {
		char[] encrypt_Token = Token.toCharArray();
		for(int i =0; i < encrypt_Token.length; i++) {
			encrypt_Token[i] += key;
		}
		
		return String.valueOf(encrypt_Token);
	}
	
	public static String Decryption(String Token, int key) {
		char[] decrypt_Token = Token.toCharArray();
		for(int i =0; i < decrypt_Token.length; i++) {
			decrypt_Token[i] -= key;
		}
		
		return String.valueOf(decrypt_Token);
	}
	
	public static int get_key() {
		LocalTime currentTime = LocalTime.now(); 
		int HH = currentTime.getHour();
		int MM = currentTime.getMinute();
		int SS = currentTime.getSecond();
		
		String time = Integer.toString(HH);
		time += Integer.toString(MM);
		time += Integer.toString(SS);
		
		return Integer.parseInt(time);
	}
	
	public static void main(String[] arg) {
		//랜덤으로 수 8개 받아 저장 
		//현재 시간 키값으로  받아 위의 수를 암호화 
		String Token  = get_Token();
		int key = get_key();
		
		System.out.println("토큰 발행>>" + Token);
		System.out.println("key 발행>>" + key);
		
		Token =Encryption(Token,key);
		System.out.println("토큰 암호화>>" + Token);
		
		Token = Decryption(Token,key);
		System.out.println("토큰 복호화>>" + Token);
		
		
	}
}
