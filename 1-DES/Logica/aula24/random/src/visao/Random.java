package visao;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class Random extends JFrame{

	private static final long serialVersionUID = 1L;
	//Atributos da tela
	private JPanel painel;
	private JLabel rotulo1;
	private JTextField gerar;
	private JButton cadastrar;
	
	Random(){
		//Posicao Tela    Tamanho Dela	(Width/Height)
		setTitle("Tela de Login");
		setBounds(750,300,500,300);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel();
		setContentPane(painel);
		setLayout(null);
		
		//Conteúdos da tela
		rotulo1 = new JLabel("Numeros gerados");
		rotulo1.setBounds(20,50,150,20);
		gerar = new JTextField();
		gerar.setBounds(180,20,200,100);
		gerar.setEditable(false);
		cadastrar = new JButton("Gerar");
		cadastrar.setBounds(120,200,200,30);
		
		painel.add(rotulo1);
		painel.add(gerar);
		painel.add(cadastrar);
	}
	public static void main(String[] args) {
		Random tela = new Random();
		tela.setVisible(true);
	}
}