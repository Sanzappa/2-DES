package modelo;

public class Venda {

	private int codCliente;
	private int codFunc;
	private double valor;
	
	public Venda() {
		
	}

	public Venda(int codCliente, int codFunc, double valor) {
		this.codCliente = codCliente;
		this.codFunc = codFunc;
		this.valor = valor;
	}

	public int getCodCliente() {
		return codCliente;
	}

	public void setCodCliente(int codCliente) {
		this.codCliente = codCliente;
	}

	public int getCodFunc() {
		return codFunc;
	}

	public void setCodFunc(int codFunc) {
		this.codFunc = codFunc;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	@Override
	public String toString() {
		return " ID do cliente = " + codCliente + " Matricula do funcionario = " + codFunc + " valor = " + valor;
	}	
}