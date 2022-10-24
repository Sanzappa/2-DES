package modelo;

public class Moto extends Veiculo{

	private int cilindradas;
	
	public Moto() {
		// TODO Auto-generated constructor stub
	}
	
	public Moto(int cilindradas, String placa, int anoModelo, int anoFabricacao, String modelo, String marca, double valor) {
		this.cilindradas = cilindradas;
		setPlaca(placa);
		setAnoModelo(anoModelo);
		setAnoFabricacao(anoFabricacao);
		setModelo(modelo);
		setMarca(marca);
		setValor(valor);
	}

	public int getCilindradas() {
		return cilindradas;
	}

	public void setCilindradas(int cilindradas) {
		this.cilindradas = cilindradas;
	}

	@Override
	public String toString() {
		return "cilindradas=" + cilindradas + "\n Placa = " + getPlaca() + "\n Ano do Modelo = " + getAnoModelo()
				+ "\n Ano da Fabricacao = " + getAnoFabricacao() + "\n Modelo = " + getModelo() + "\n Marca = "
				+ getMarca() + "\n Valor = " + getValor() ;
	}
	
}