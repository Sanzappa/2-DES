package ex;

import java.util.Random;

public class Matriz5 {

	static Random r = new Random();
	public static void main(String[] args) {

		int menor = 0, maior = 0;
		
		int qtdIm = 0;
		
		int numbers;
		
		int[][] m = new int[5][5];
		
		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {
				m[i][j] = r.nextInt(100);
				
				if (m[i][j] % 2 != 0) {
					qtdIm++;
				}
			}
		}
		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {
				m[i][j] = r.nextInt(100);
				System.out.println(m[i][j]);
				{
                    if(m[i][j] > maior)
                            maior = m[i][j];
                    else if (m[i][j] < menor)
                            menor = m[i][j];
				}
			}
		}		
		System.out.println("O menor e o maior numero par � : " + menor + " " + maior);
		System.out.println("O menor e o maior numero impar �  : " + menor + " " + maior);
		System.out.println("quantia " + qtdIm);
	}
}