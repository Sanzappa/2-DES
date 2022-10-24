package modelo;

import java.util.Scanner;

public class Main {
	
	private static Scanner s = new Scanner(System.in);
	private static Arquivo arq = new Arquivo();
	private static String body = "";
	public static void main (String[] args){
		
		int menu = 0;
		
		do {
			System.out.println("Digite uma opção");
			System.out.println("1 - Adicionar Titulo\t2 - Adicionar subtítulo\t3 - Adicionar Parágrafo\t4 - Gerar HTML\n0 - Cancelar");
			menu = s.nextInt();
			switch (menu) {
			case 1:
				addTitulo();
				break;
				
			case 2:
				addSubtitulo();	
				break;
			case 3:
				addParagrafo();
				break;
			case 4:
				gerarHtml();
				break;
			default:
				break;
			}
		}while (menu != 0 || menu != 4);
		
	}
	private static void addTitulo() {
		System.out.println("Digite o conteúdo do seu titulo");
		s.nextLine();
		body = body + "\r\n<h1>" + s.nextLine() + "</h1>";
		
		System.out.println("Titulo adicionado");
	}
	private static void addSubtitulo() {
		System.out.println("Digite o conteúdo do seu subtitulo");
		s.nextLine();
		body = body + "\r\n<h3>" + s.nextLine() + "</h3>";
		
		System.out.println("Subtitulo adicionado");
	}
	private static void addParagrafo() {
		System.out.println("Digite o conteúdo do seu Paragrafo");
		s.nextLine();
		body = body + "\r\n<p>" + s.nextLine() + "</p>";
		
		System.out.println("Paragrafo adicionado");
	}
	private static void gerarHtml() {
		String html = "<html>\r\n<body>" + body + "\r\n</body>\r\n</html>";
		arq.escrever(html, "index", false);
		
	}
}