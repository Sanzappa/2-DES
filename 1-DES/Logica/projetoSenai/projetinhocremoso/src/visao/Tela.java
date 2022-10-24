package visao;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Scanner;

import controle.ProcessaArquivo;
import modelo.Arquivo;

public class Tela {
	
	public static void main(String[] args) throws ParseException {
		
		
		Scanner leia= new Scanner(System.in);
		
		System.out.println("digite o dnheiro : ");
		Double valor = leia.nextDouble();
		
		System.out.println("saida ou entrada : ");
		String SaidaOuEntrada = leia.next();
		
		final DateFormat df = new SimpleDateFormat("dd-MM-yyyy");
		final Calendar cal = Calendar.getInstance();
		String data = df.format(cal.getTime());
		
		Arquivo dado = new Arquivo(data, valor, SaidaOuEntrada);
		
		ProcessaArquivo.abrir();
		ProcessaArquivo.dados.add(dado);
		ProcessaArquivo.salvar();
		
	}

}
