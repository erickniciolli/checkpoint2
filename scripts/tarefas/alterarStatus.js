
function alterarStatus(idTarefa, descricao, status) {
    
    let tokenJwt = sessionStorage.getItem("jwt");

    let urlEndPointAlterarStatus = `https://ctd-todo-api.herokuapp.com/v1/tasks/${idTarefa}`

    const obj = {
        description: descricao,
        completed: status
    };

    //converto o objeto em JSON:
    let objJson = JSON.stringify(obj);

    let configuracaoAlterarStatus = {
        method: "PUT",
        headers: {
            "authorization": tokenJwt,
            "content-type": "application/json"
        },
        body: objJson,
    }



        fetch(urlEndPointAlterarStatus, configuracaoAlterarStatus)
            .then(resultado => {
                return resultado.json();

            })
            .then(resultado => {
                if (radioSelecionadoCompleta) {
                    mostraTarefasTerminadas(resultado);
                } else {
                    mostraTarefasPendentes(resultado);
                }

            })
            .catch(
                erro => {
                    console.log(erro);
                }
            );

    }

;



