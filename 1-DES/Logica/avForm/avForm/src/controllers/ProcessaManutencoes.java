package controllers;

import java.util.ArrayList;

import models.Manutencao;
import models.ManutencaoDAO;

public class ProcessaManutencoes {

	public static ArrayList<Manutencao> manutencoes = new ArrayList<>();
	private static ManutencaoDAO dao = new ManutencaoDAO();
	
	public static void abrir() {
		manutencoes = dao.ler();
	}
	
	public static void salvar() {
		dao.escrever(manutencoes);
	}
	
}