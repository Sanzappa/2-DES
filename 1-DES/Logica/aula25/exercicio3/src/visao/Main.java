package visao;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Random;

public class Main {

	public static void main(String[] args) {

		Random rand = new Random();
		
		
		String info = "";
		
		for (int i = 0; i < 10; i++) {
			info = info + rand.nextInt(100) + "\r\n";
		}
		try {
			FileWriter fw = new FileWriter("entrada.txt", false);
			BufferedWriter bw = new BufferedWriter(fw);
			
			bw.write(info);
			
			bw.close();
			fw.close();	
		}catch(Exception e) {
			System.out.println(e.toString());
		}
		ArrayList<Integer> data = new ArrayList<Integer>();
		
		try {
			FileReader fr = new FileReader("entrada.txt");
			BufferedReader br = new BufferedReader(fr);
			
			String linha = "";
			
			while ((linha = br.readLine()) != null) {
				data.add(Integer.parseInt(linha));
			}
			br.close();
			fr.close();
		}catch (Exception e) {
			System.out.println(e.toString());
		}
		
		data.sort(null);
		
		for (Integer num : data) {
			System.out.println(num);
		}
		
	}
}