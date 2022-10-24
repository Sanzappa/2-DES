package controle;

import java.text.ParseException;
import java.util.ArrayList;

import modelo.Pet;

public class PetProcess {
	
	public static ArrayList<Pet> pets = new ArrayList<>();
	private static PetDAO dao = new PetDAO();
	
	public static void abrir() {
		pets = dao.ler();
	}
	
	public static void carregarTestes() throws ParseException {
		pets = new ArrayList<>();
		
		pets.add(new Pet(1, "Cachorro", "Toto", "Vira Latas",26,"01/01/2015","Joaquin","(19)98787-7898"));
		pets.add(new Pet(2, "Gato", "Mimi", "Siames",7,"10/01/2015","Felipe","(19)98878-7898"));
		pets.add(new Pet(3, "Papagaio", "JuninPÈTorto", "Verdadeiro",0.1f,"01/08/2015","Joao","(19)99987-7898"));
		pets.add(new Pet(4, "Macaco", "", "Chimpanze",40,"18/02/2015","Guilherme","(19)99998-7898"));
	}

	public static void salvar() {
		// TODO Auto-generated method stub
		
	}
}