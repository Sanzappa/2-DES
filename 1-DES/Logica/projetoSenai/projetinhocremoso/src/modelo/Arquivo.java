package modelo;

import java.text.DecimalFormat;
import java.util.Currency;
import java.util.Locale;

public class Arquivo {
	
	String data;
	Double valor;
	String SaidaOuEntrada;
	
	private final Locale BRASIL = new Locale("pt", "BR");
	private DecimalFormat df = new DecimalFormat("#.00");
	
	public Arquivo() {
		
	}
	
	public Arquivo(String linha) {
		
		df.setCurrency(Currency.getInstance(BRASIL));
		
		this.data = linha.split(";")[0];
		this.valor = Double.parseDouble(linha.split(";")[1].replace(",", "."));
		this.SaidaOuEntrada = linha.split(";")[2];
	}

	public Arquivo(String data, Double valor, String saidaOuEntrada) {
		this.data = data;
		this.valor = valor;
		SaidaOuEntrada = saidaOuEntrada;
	}

	public String toString() {
		return data + "\tR$ " + valor + "\t" + SaidaOuEntrada + "\n";
	}

	public String toCSV() {
		return data + ";" + df.format(valor) + ";" + SaidaOuEntrada + "\r\n";
	}
	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}

	public String getSaidaOuEntrada() {
		return SaidaOuEntrada;
	}

	public void setSaidaOuEntrada(String saidaOuEntrada) {
		SaidaOuEntrada = saidaOuEntrada;
	}
	
	
}
