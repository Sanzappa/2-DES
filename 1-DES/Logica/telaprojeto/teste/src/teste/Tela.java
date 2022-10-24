package teste;
import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;
import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class Tela extends JFrame implements ActionListener{
	
	private JPanel painel;
	private JLabel valor, data;
	private JTextField tfValor, tfData;
	private JButton entrada, saida, cadastrar, buscar, alterar, excluir;
	private JTextArea tabela;
	
	Tela() throws IOException{
	
		setTitle("Tela de usuario");
		setBounds(450, 100, 800, 600);
		painel = new JPanel();
		setContentPane(painel);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setLayout(null);
		
		valor = new JLabel("Valor");
		valor.setBounds(20, 55, 120, 30);
		tfValor = new JTextField();
		tfValor.setBounds(140, 55, 255, 30);
		
		data = new JLabel("Data");
		data.setBounds(20, 95, 120, 30);
		tfData = new JTextField();
		tfData.setBounds(140, 95, 255, 30);
		
		entrada = new JButton("Entrada");
		saida = new JButton("Saida");
		entrada.setBounds(420, 155, 110, 50 );
		saida.setBounds(270, 155, 110, 50);
		
		BufferedImage buttonIcon = ImageIO.read( new File("C:\\Users\\des\\Documents\\SENAI2022\\Logica\\telaprojeto\\teste\\img\\sinal-de-mais.png"));
		cadastrar = new JButton(new ImageIcon(buttonIcon));
		cadastrar.setBorderPainted(false);
		cadastrar.setFocusPainted(false);
		cadastrar.setContentAreaFilled(false);
		cadastrar.setBounds(350, 470, 100, 100);
		
		cadastrar.addActionListener(this);

		
		tabela = new JTextArea();
		tabela.setBounds(10, 280, 760, 250);
		tabela.setEnabled(true);
		tabela.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		tabela.setEnabled(false);
		
		painel.add(entrada);
		painel.add(saida);
		
		painel.add(cadastrar);
		
		painel.add(tabela);
		
		
	}
	
	public static void main(String[]args) throws IOException {
		Tela tela = new Tela();
		tela.setVisible(true);
	}

//	public void actionPerformed(ActionEvent e) {
//		if (e.getSource() == cadastrar) {
//			cadastrar();
//		}
//		if (e.getSource() == buscar) {
//			buscar();
//		}
//		
//		if (e.getSource() == excluir) {
//			excluir();
//		}
//		
//		if (e.getSource() == alterar) {
//			alterar();
//		}
//	}

	private void cadastrar() {
		
	}

	private void buscar() {
		
	}

	private void excluir() {
		
	}

	private void alterar() {
		
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		
	}
}