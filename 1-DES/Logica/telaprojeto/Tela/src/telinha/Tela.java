package telinha;
import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.BorderFactory;
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
	
	Tela(){
	
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
		entrada.setBounds(100, 155, 110, 50 );
		saida.setBounds(300, 155, 110, 50);
		
		cadastrar = new JButton("Cadastrar");
		buscar = new JButton("Buscar");
		alterar = new JButton("Alterar");
		excluir = new JButton("Apagar");
		cadastrar.setBounds(500, 55, 110, 30);
		buscar.setBounds(500, 100, 110, 30);
		excluir.setBounds(500, 150, 110, 30);
		alterar.setBounds(500, 200, 110, 30);
		
		tabela = new JTextArea();
		tabela.setBounds(10, 280, 760, 250);
		tabela.setEnabled(true);
		tabela.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, Color.BLACK));
		tabela.setEnabled(false);
		
		painel.add(valor);
		painel.add(tfValor);
		
		painel.add(data);
		painel.add(tfData);
		
		painel.add(entrada);
		painel.add(saida);
		
		painel.add(cadastrar);
		painel.add(alterar);
		painel.add(excluir);
		painel.add(buscar);
		
		painel.add(tabela);
		
		
	}
	
	public static void main(String[]args) {
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