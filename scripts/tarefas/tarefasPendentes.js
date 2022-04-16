let tarefasPendentes = document.querySelector(".tarefas-pendentes");

function mostraTarefasPendentes(tarefa) {
    let liTarefasPendentes = document.createElement("li");
    liTarefasPendentes.classList.add("tarefa");
    liTarefasPendentes.setAttribute("id", tarefa.id)

    liTarefasPendentes.innerHTML =
        `            
        <div class="not-done" ></div>
        <div class="descricao">
            <p class="nome">${tarefa.description}</p>
            <p class="timestamp"><i class="far fa-calendar-alt"></i>${tarefa.createdAt}</p>
         </div>
         <img id="lixeira" src="/checkpoint2/assets/bin.png" onclick="deletarTarefa(${tarefa.id}, ${tarefa.completed})">
         <img id="completar" src="/checkpoint2/assets/completar.png" onclick="alterarStatus(${tarefa.id}, ${tarefa.description}, true)" onclick="enviarParaCompleto()">
    `
    tarefasPendentes.appendChild(liTarefasPendentes)
}

function capturaIdTarefa(idTarefa) {

    console.log(idTarefa);
}