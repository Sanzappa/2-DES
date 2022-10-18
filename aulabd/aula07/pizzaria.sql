drop procedure if exists insere_pedidos;
delimiter //
create procedure insere_pedidos()
	begin
	declare erro_sql tinyint default false;
	declare continue handler for sqlexception set erro_sql = true;
	start transaction;
        insert into Pedidos(cliente_id, data, hora) values(30,DATE_SUB(curdate(),INTERVAL 10 DAY),"20:54:00");
		insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(30,4,1, (select valor from Pizzas where pizza_id = 4));
        insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(30,6,2, (select valor from Pizzas where pizza_id = 6));
        insert into Itens_Pedido(pedido_id, pizza_id, quantidade, valor) values(30,8,3, (select valor from Pizzas where pizza_id = 8));
        update Pedidos set valor=(select sum(quantidade * valor) from Itens_Pedido where pedido_id = 30) where pedido_id = 30;
		if erro_sql = false then
			commit;
			select 'Transação efetivada com sucesso' as Resultado;
		else
			rollback;
			select 'Erro na transação' as Resultado;
		end if;
end//
delimiter ;

call insere_pedidos();