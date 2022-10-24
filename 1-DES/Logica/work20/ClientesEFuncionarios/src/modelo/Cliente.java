package modelo;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Cliente extends Pessoa {
	
	private int id;
	private double creditoLimite;

	public Cliente() {
		
	}

	public Cliente(int id, double creditoLimite, String nome, String telefone, Date nascimento) {
		this.id = id;
		this.creditoLimite = creditoLimite;
		setNome(nome);
		setTelefone(telefone);
		setNascimento(nascimento);
	}
	
	
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getCreditoLimite() {
		return creditoLimite;
	}

	public void setCreditoLimite(double creditoLimite) {
		this.creditoLimite = creditoLimite;
	}

	@Override
	public String toString() {
		return "\n id = " + id + "\n creditoLimite = " + creditoLimite + "\n Nome = " + getNome()+ "\n Telefone = " + getTelefone() + "\n Nascimento = " + new SimpleDateFormat("dd/MM/yyyy").format(getNascimento());
	}
	

}