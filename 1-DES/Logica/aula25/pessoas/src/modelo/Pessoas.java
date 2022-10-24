package modelo;

import java.util.Date;

public class Pessoas {

	private String v1;
	private int v2;

	public Pessoas (String entrada){
		
		v1 = (entrada.split(";")[0]);
		v2 = Integer.parseInt(entrada.split(";")[1]);
	}
	
	public String pessoa(){
		int idade = 2022 - v2;
		
		return v1 + ";" + idade;
	}
	
}