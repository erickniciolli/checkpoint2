let tarefasTerminadas = document.querySelector(".tarefas-terminadas");


function mostraTarefasTerminadas(tarefa) {
    let liTarefas = document.createElement("li");
    liTarefas.classList.add("tarefa");
    liTarefas.setAttribute("id", tarefa.id)

    liTarefas.innerHTML =
        `
        <div class="done"></div>
        <div class="descricao">
            <p class="nome">${tarefa.description}</p>
            <p class="timestamp"><i class="far fa-calendar-alt"></i>${tarefa.createdAt}</p>
        </div>
        <img id="lixeira" src="/checkpoint2/assets/bin.png" onclick="deletarTarefa(${tarefa.id}, ${tarefa.completed})">
        <img id="voltarPendente" src="/checkpoint2/assets/voltarPendente.png" onclick="alterarStatus(${tarefa.id}, ${tarefa.description}, false)" onclick="enviarParaPendente()">
    `
    tarefasTerminadas.appendChild(liTarefas)
}