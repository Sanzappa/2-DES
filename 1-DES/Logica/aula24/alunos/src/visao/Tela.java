package visao;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class Tela extends JFrame{

	private static final long serialVersionUID = 1L;
	//Atributos da tela
	private JPanel painel;
	private JLabel rotulo1, rotulo2, rotulo3, rotulo4;
	private JTextField nome, nota1, nota2, nota3;
	private JButton cadastrar;
	
	Tela(){
		//Posicao Tela    Tamanho Dela	(Width/Height)
		setTitle("Tela de Login");
		setBounds(750,300,500,300);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel();
		setContentPane(painel);
		setLayout(null);
		
		//Conteúdos da tela
		rotulo1 = new JLabel("Nome:");
		rotulo1.setBounds(20,20,100,20);
		nome = new JTextField();
		nome.setBounds(120,20,200,30);
		rotulo2 = new JLabel("Nota1:");
		rotulo2.setBounds(20,60,100,20);
		nota1 = new JTextField();
		nota1.setBounds(120,100,200,30);
		rotulo3 = new JLabel("Nota2:");
		rotulo3.setBounds(20,100,100,20);
		nota2 = new JTextField();
		nota2.setBounds(120,140,200,30);
		rotulo4 = new JLabel("Nota3:");
		rotulo4.setBounds(20,140,100,20);
		nota3 = new JTextField();
		nota3.setBounds(120,60,200,30);
		cadastrar = new JButton("Cadastrar");
		cadastrar.setBounds(120,200,200,30);
		
		painel.add(rotulo1);
		painel.add(nome);
		painel.add(rotulo2);
		painel.add(rotulo3);
		painel.add(rotulo4);
		painel.add(nota1);
		painel.add(nota2);
		painel.add(nota3);
		painel.add(cadastrar);
	}
	public static void main(String[] args) {
		Tela tela = new Tela();
		tela.setVisible(true);
	}
}