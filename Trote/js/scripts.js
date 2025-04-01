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

    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value);
    soma += (30 * kitAlimentacao);

    let equipe = document.getElementById("equipe").value

        if(equipe == "Laranja"){
            let pontosKitAlimentacao = 0
            let pontosKitSuplmento
        }
        if(kitAlimentacao >= 97 && kitSuplemento >= 49){
                pontosKitAlimentacao = 5000 + ((kitAlimentacao - 97) * 30) + ((kitSuplemento - 49) * 15);
        }
       
            else if(kitAlimentacao >= 78){
            pontosKitAlimentacao = 4000 + ((kitAlimentacao - 78) * 30);
        }
            else if(kitAlimentacao >= 49){
            pontosKitAlimentacao = 2500 + ((kitAlimentacao - 49) * 30);
        }
            else if(kitAlimentacao >= 19){
            pontosKitAlimentacao = 1000 + ((kitAlimentacao - 19) * 30);
        }
            else{
            pontosKitAlimentacao = 0;
        }
             alert(pontosKitAlimentacao);
            
                

    let kitSuplemento = Number(document.getElementById("kitSuplemento").value);
    soma += (15 * kitSuplemento);

    let pacoteArroz = Number(document.getElementById("pacoteArroz").value);
    soma += (1 * pacoteArroz);

    let pacoteFeijao = Number(document.getElementById("pacoteFeijao").value);
    soma += (1 * pacoteFeijao);

    let pacoteMacarrao = Number(document.getElementById("pacoteMacarrao").value);
    soma += (0.5 * pacoteMacarrao);

    let oleo = Number(document.getElementById("oleo").value);
    soma = soma + (1 * oleo);    
    
    document.getElementById("soma").innerHTML = soma.toFixed(2);

    


}