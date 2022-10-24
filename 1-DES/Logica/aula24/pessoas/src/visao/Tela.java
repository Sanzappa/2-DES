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
	private JLabel rotulo1, rotulo2;
	private JTextField nome, ano;
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
		rotulo1.setBounds(20,30,150,20);
		nome = new JTextField();
		nome.setBounds(180,20,200,40);
		rotulo2 = new JLabel("Ano de Nascimento:");
		rotulo2.setBounds(20,100,150,20);
		ano = new JTextField();
		ano.setBounds(180,90,200,40);
		
		cadastrar = new JButton("Cadastrar");
		cadastrar.setBounds(120,200,200,30);
		
		painel.add(rotulo1);
		painel.add(nome);
		painel.add(rotulo2);
		painel.add(ano);
		painel.add(cadastrar);
	}
	public static void main(String[] args) {
		Tela tela = new Tela();
		tela.setVisible(true);
	}
}