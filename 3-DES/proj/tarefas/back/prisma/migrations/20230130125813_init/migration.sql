-- CreateTable
CREATE TABLE `tarefas` (
    `id_tarefa` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(500) NOT NULL,
    `horario_tarefa` VARCHAR(20) NOT NULL,
    `horario_encerramento` VARCHAR(20) NULL,
    `status_tarefa` VARCHAR(60) NOT NULL,

    PRIMARY KEY (`id_tarefa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
