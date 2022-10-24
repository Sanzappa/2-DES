package modelo;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Funcionario extends Pessoa {
	
	private int matricula;
	private double comissao;

	public Funcionario() {
		
	}

	public Funcionario(int matricula, double comissao, String nome, String telefone, Date nascimento) {
		setNome(nome);
		setTelefone(telefone);
		setNascimento(nascimento);
		this.comissao = comissao;
		this.matricula = matricula;
		
	}

	 public int getMatricula() {
		 return matricula;
	 }
	 
	 public double getComissao() {
		 return comissao;
	 }

	@Override
	public String toString() {
		return "-----------Funcionario-----------\n matricula = " + matricula + "\n Nome = "  + getNome() + "\n Telefone = " + getTelefone() + "\n Nascimento = " + new SimpleDateFormat("dd/MM/yyyy").format(getNascimento()) + "\n matricula = " + matricula + "\n comissao = " + comissao ;
	}
	
}