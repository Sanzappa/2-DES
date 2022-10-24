package visao;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

import controle.ProcessaArquivo;
import modelo.Arquivo;

public class TelaCadastrar extends JFrame implements ActionListener {

	private static final long serialVersionUID = 1L;
	private JPanel painel;
	private JLabel dinheiro, Saldo, pesquisa;
	private JTextField entradaDinheiro, tfSaldo;
	private JButton entrada, saida;

	TelaCadastrar() {
		setTitle("Gerenciamento de seu dinheiro");
		setBounds(250, 150, 400, 300);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		painel = new JPanel();
		painel.setBackground(new Color(57,57,67,255));
		setContentPane(painel);
		setLayout(null);

		dinheiro = new JLabel("Digite o valor : ");
		dinheiro.setBounds(20, 20, 100, 30);
		dinheiro.setForeground(Color.white);
		painel.add(dinheiro);
		
		pesquisa = new JLabel("________________");
		pesquisa.setBounds(130,29,210,30);
		pesquisa.setForeground(Color.white);
		painel.add(pesquisa);

		Saldo = new JLabel("Saldo:");
		Saldo.setBounds(20, 55, 100, 30);
		Saldo.setForeground(Color.white);
		painel.add(Saldo);
		tfSaldo = new JTextField(ProcessaArquivo.saldo + "".replace(".", ","));
		tfSaldo.setBounds(65, 60, 100,20);
		tfSaldo.setBackground(new Color(57, 57, 67, 255));
		tfSaldo.setForeground(Color.white);
		tfSaldo.setEditable(false);
		tfSaldo.setBorder(null);
		painel.add(tfSaldo);

		entradaDinheiro = new JTextField();
		entradaDinheiro.setBounds(135, 20, 300, 30);
		entradaDinheiro.setBackground(new Color(57, 57, 67, 255));
		entradaDinheiro.setForeground(Color.white);
		entradaDinheiro.setBorder(null);
		painel.add(entradaDinheiro);

		entrada = new JButton("Entrada");
		entrada.setBackground(new Color(0,202,79,255));
		saida = new JButton("Saida");
		saida.setBackground(Color.red);
		entrada.setBounds(100, 150, 100, 30);
		saida.setBounds(205, 150, 100, 30);

		painel.add(entrada);
		painel.add(saida);

		entrada.addActionListener(this);
		saida.addActionListener(this);

	}

	
	public void Entrada() {
		DateFormat df = new SimpleDateFormat("dd-MM-yyyy");
		Calendar cal = Calendar.getInstance();
		String data = df.format(cal.getTime());
		Arquivo a = new Arquivo(data, entradaDinheiro.getText(), "Entrada");
		ProcessaArquivo.dados.add(a);
		ProcessaArquivo.salvar();
		tfSaldo.setText(ProcessaArquivo.saldo+Double.parseDouble(entradaDinheiro.getText())+"");
	}
	
	public void Saida() {
		DateFormat df = new SimpleDateFormat("dd-MM-yyyy");
		Calendar cal = Calendar.getInstance();
		String data = df.format(cal.getTime());
		Arquivo a = new Arquivo(data, entradaDinheiro.getText(), "Saida");
		ProcessaArquivo.dados.add(a);
		ProcessaArquivo.salvar();
		tfSaldo.setText(ProcessaArquivo.saldo-Double.parseDouble(entradaDinheiro.getText())+"");
	}

	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == entrada) {
			
			Entrada();
			this.dispose();
			TelaHome t;
			try {
				t = new TelaHome();
				t.setVisible(true);
			} catch (IOException e1) {
				e1.printStackTrace();
			}
			
		} else if (e.getSource() == saida) {
			
			Saida();
			this.dispose();
			TelaHome t;
			try {
				t = new TelaHome();
				t.setVisible(true);
			} catch (IOException e1) {
				e1.printStackTrace();
			}
			
		}
	}

	public static void main(String[] args) throws ParseException {
		ProcessaArquivo.abrir();
		TelaCadastrar login = new TelaCadastrar();
		login.setVisible(true);
	}

}
