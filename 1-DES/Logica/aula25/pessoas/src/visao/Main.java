package visao;

import controle.ProcessaPessoas;

public class Main {

	public static void main(String[] args) {

		ProcessaPessoas.carregar();
		
		ProcessaPessoas.enviar();
		
		System.out.println("Idades cadastradas com sucesso");
	}
}