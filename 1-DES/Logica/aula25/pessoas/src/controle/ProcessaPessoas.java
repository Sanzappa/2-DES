package controle;

import java.util.ArrayList;

import modelo.Pessoas;

public class ProcessaPessoas {
	
	public static ArrayList<Pessoas> linhas = new ArrayList<>();
	private static DAO dao = new DAO();
		
	public static void carregar() {
		linhas = dao.abrir();
		}
	
	public static void enviar() {
		dao.salvarSoma(linhas);
	}

}