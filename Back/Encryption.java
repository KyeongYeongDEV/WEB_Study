package choi;
import java.util.*;


public class Encryption {
	public static String encry(String s, int key) { //암호화 
		char[] ch = s.toCharArray();
		for(int i=0; i < ch.length; i++) {
			ch[i]+=key;
		}
		
		return String.valueOf(ch);
	}
	
	public static String decry(String s, int key) {
		char[] ch = s.toCharArray();
		
		for(int i=0; i < ch.length; i++) {
			ch[i] -= key;
		}
		
		return String.valueOf(ch);
	}
	
	public static void main(String args[]) {
		Scanner scan = new Scanner(System.in);
		System.out.print("문자열을 입력하시오 >> ");
		String use_str = scan.next();
		System.out.print("key값을 입력하세요 >>");
		int key = scan.nextInt();
		
		String tmp_str = encry(use_str,key);
		
		System.out.println("암호화한 문자 >> " + tmp_str);
		System.out.println("복호화한 문자 >> " +decry(tmp_str,key));
		
		scan.close();
	}
}
