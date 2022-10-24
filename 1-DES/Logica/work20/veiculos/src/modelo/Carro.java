package modelo;

public class Carro extends Veiculo{

	private String tipo;
	private int passageiros;
	
	public Carro() {
		
	}
	
	public Carro( String tipo, int passageiros, String placa, int anoModelo, int anoFabricacao, String modelo, String marca, double valor) {
		setPlaca(placa);
		setAnoModelo(anoModelo);
		setAnoFabricacao(anoFabricacao);
		setModelo(modelo);
		setMarca(marca);
		setValor(valor);
		this.tipo = tipo;
		this.passageiros = passageiros;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public int getPassageiros() {
		return passageiros;
	}

	public void setPassageiros(int passageiros) {
		this.passageiros = passageiros;
	}

	@Override
	public String toString() {
		return "tipo = " + tipo + "\n passageiros=" + passageiros + "\n Placa=" + getPlaca()
				+ "\n Ano do Modelo = " + getAnoModelo() + "\n Ano da Fabricacao = " + getAnoFabricacao() + "\n Modelo = "
				+ getModelo() + "\n Marca = " + getMarca() + "\n Valor = " + getValor();
	}
	
	
}