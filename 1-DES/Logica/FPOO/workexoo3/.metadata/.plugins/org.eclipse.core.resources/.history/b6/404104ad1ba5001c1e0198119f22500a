package modelo;

import java.util.Scanner;
import java.text.SimpleDateFormat;
import java.util.Date;
import visao.Main;
import modelo.Notas;

public class Aluno {

	Scanner scan = new Scanner(System.in);

	public int ra;
	public String nome;
	public Date nascimentoAluno;
	public Notas[] notas = new Notas[4];
	
	public Aluno() {
		
	}
	public Aluno(int ra, String nome, Date nascimentoAluno) {
		this.ra = ra;
		this.nome = nome;
		this.nascimentoAluno = nascimentoAluno;
	}

	private SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");

	@SuppressWarnings("deprecation")
	public int idadeDoItem() {
		Date hoje = new Date();
		return hoje.getYear() - nascimentoAluno.getYear();
	}

	public String obterConceito() {
		boolean aprovado = true;
		for (int i = 0; i < notas.length; i++) {

			if (notas[i].obterMedia() <= 50) {
				aprovado = false;
				break;
			}
		}
		if (aprovado) {
			return "Aluno(a) " + nome + "Foi aprovado!";
		} else {
			return "Aluno(a) " + nome + "Foi reprovado!";
		}
	}
	public String paraString() {
		return nome + "\t" + ra + "\t" + df.format(nascimentoAluno)+ "\t" + "        " + idadeDoItem();
	}
}