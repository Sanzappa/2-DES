package controle;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import modelo.Pessoas;

public class DAO {
	
	private BufferedReader br;
	private BufferedWriter bw;
	private String entrada = "C:\\Users\\des\\Documents\\SENAI2022\\Logica\\aula25\\pessoas\\dados\\entrada.csv";
	private String saida = "C:\\Users\\des\\Documents\\SENAI2022\\Logica\\aula25\\pessoas\\dados\\saida.csv";
	
	public ArrayList<Pessoas> abrir(){
		ArrayList<Pessoas> linhas = new ArrayList<>();
		Pessoas p;
		try {
			br = new BufferedReader(new FileReader(entrada));
			String linha = br.readLine();
			while(linha != null) {
				p = new Pessoas(linha);
				linhas.add(p);
				linha = br.readLine();
			}
			br.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return linhas;
	}
	
	public void salvarSoma(ArrayList<Pessoas> linhas) {
		try {
			bw = new BufferedWriter(new FileWriter(saida));
			for (Pessoas l : linhas) {
				bw.write(l.pessoa()+"\r\n");
			}
			bw.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}