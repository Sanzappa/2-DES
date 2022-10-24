package modelo;

public class Prato {
	
	public int codigoPrato;
	public String tipo;
	public String nome;
	public String descricao;
	public float preco;
	
	public static void Prato() {
	}
	
	public Prato(int codigoPrato, String tipo, String nome,  String descricao, float preco) {
		this.codigoPrato = codigoPrato;
		this.tipo = tipo;
		this.nome = nome;
		this.descricao = descricao;
		this.preco = preco;
	}
	public String paraString() {
		return codigoPrato + "\t" + tipo + "\t" + nome + "\t" + descricao + "\t" + preco + "\t";
	}
}