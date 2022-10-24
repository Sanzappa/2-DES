package Main;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;

public class Arquivos {
	
public void escrever(ArrayList<Integer> info, String fileName, boolean append) {
		
		try {
			FileWriter fw = new FileWriter(fileName + ".txt", append);
			BufferedWriter bw = new BufferedWriter(fw);
			
			for (Integer in : info) {
				bw.write(in.intValue() + "\r\n");
			}
			
			bw.close();
			fw.close();	
		}catch(Exception e) {
			System.out.println(e.toString());
		}
	}
	public ArrayList<Integer> ler (String fileName){
		ArrayList<Integer> data = new ArrayList<Integer>();
		
		try {
			FileReader fr = new FileReader(fileName + ".txt");
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
		return data;
	}
}