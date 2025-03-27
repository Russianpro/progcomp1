function calcular(){
    let soma = 0;
    //recupera o valor da ação social digitado
    //declarção de variãvel sem tipo
    let acaoSocial = Number(document.getElementById("acaoSocial").value);
    soma += (1 * acaoSocial);
    let homenagem = Number(document.getElementById("homenagem").value);
    soma += (1 * homenagem);
    let leite = Number(document.getElementById("leite").value);
    soma += (2 * leite);
    let kitAvulso = Number(document.getElementById("kitAvulso").value);
    soma += (30 * kitAvulso);
    let kitSuplementoAvulso = Number(document.getElementById("kitSuplementoAvulso").value);
    soma += (15 * kitSuplementoAvulso);
    let pacoteArroz = Number(document.getElementById("pacoteArroz").value);
    soma += (1 * pacoteArroz);
    let pacoteFeijao = Number(document.getElementById("pacoteFeijao").value);
    soma += (1 * pacoteFeijao);
    let pacoteMacarrao = Number(document.getElementById("pacoteMacarrao").value);
    soma += (0.5 * pacoteMacarrao);
    let oleo = Number(document.getElementById("oleo").value);
    soma = soma + (1 * oleo);    
    //devolve o resultado para HTML

    document.getElementById("soma").innerHTML = soma.toFixed(2);
}