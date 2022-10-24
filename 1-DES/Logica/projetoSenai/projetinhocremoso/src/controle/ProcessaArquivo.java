package controle;

import java.text.ParseException;
import java.util.ArrayList;

import modelo.Arquivo;

public class ProcessaArquivo {

	public static ArrayList<Arquivo> dados = new ArrayList<>();
	public static ArquivoDAO dado = new ArquivoDAO();
	
	public static void abrir() throws ParseException {
		dados = dado.ler();
	}
	
	public static void salvar() {
		dado.escrever(dados);
	}
	

}
