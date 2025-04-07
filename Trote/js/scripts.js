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

    let kitSuplemento = Number(document.getElementById("kitSuplemento").value);
    soma += (15 * kitSuplemento);

    let pontosKitAlimentacao = 0
   

        if(equipe == "Laranja"){
            
       
        if(kitAlimentacao >= 97 && kitSuplemento >= 49){
                pontosKitAlimentacao = 5000 + ((kitAlimentacao - 97) * 30) + ((kitSuplemento - 49) * 15);
        }
       
            else if(kitAlimentacao >= 78 && kitSuplemento>= 39){
            pontosKitAlimentacao = 4000 + ((kitAlimentacao - 78) * 30 + (kitSuplemento - 39) * 15);
        }
            else if(kitAlimentacao >= 49 && kitSuplemento>= 25){
            pontosKitAlimentacao = 2500 + ((kitAlimentacao - 49) * 30 + (kitSuplemento - 25) * 15);
        }
            else if(kitAlimentacao >= 19 && kitSuplemento>= 10){
            pontosKitAlimentacao = 1000 + ((kitAlimentacao - 19) * 30 + (kitSuplemento - 10) * 15);
        }
            else{
            pontosKitAlimentacao = 0;
        }
        }
        else if(equipe == "Preto"){
          
        
        if(kitAlimentacao >= 103 && kitSuplemento >= 53){
                pontosKitAlimentacao = 5000 + ((kitAlimentacao - 103) * 30) + ((kitSuplemento - 53) * 15);
        }
       
            else if(kitAlimentacao >= 82 && kitSuplemento>= 42){
            pontosKitAlimentacao = 4000 + ((kitAlimentacao - 82) * 30 + (kitSuplemento - 42) * 15);
        }
            else if(kitAlimentacao >= 52 && kitSuplemento>= 26){
            pontosKitAlimentacao = 2500 + ((kitAlimentacao - 52) * 30 + (kitSuplemento - 26) * 15);
        }
            else if(kitAlimentacao >= 21 && kitSuplemento>= 10){
            pontosKitAlimentacao = 1000 + ((kitAlimentacao - 21) * 30 + (kitSuplemento - 10) * 15);
        }
            else{
            pontosKitAlimentacao = 0;
        }
        }        
        else if(equipe == "Roxa"){
        
           
        
        if(kitAlimentacao >= 102 && kitSuplemento >= 51){
                pontosKitAlimentacao = 5000 + ((kitAlimentacao - 102) * 30) + ((kitSuplemento - 51) * 15);
        }
       
            else if(kitAlimentacao >= 82 && kitSuplemento>= 41){
            pontosKitAlimentacao = 4000 + ((kitAlimentacao - 82) * 30 + (kitSuplemento - 42) * 15);
        }
            else if(kitAlimentacao >= 52 && kitSuplemento>= 26){
            pontosKitAlimentacao = 2500 + ((kitAlimentacao - 52) * 30 + (kitSuplemento - 26) * 15);
        }
            else if(kitAlimentacao >= 19 && kitSuplemento>= 10){
            pontosKitAlimentacao = 1000 + ((kitAlimentacao - 21) * 30 + (kitSuplemento - 10) * 15);
        }
            else{
            pontosKitAlimentacao = 0;
        }
        }

        else if(equipe == "Verde"){
        
           
        
            if(kitAlimentacao >= 88 && kitSuplemento >= 44){
                    pontosKitAlimentacao = 5000 + ((kitAlimentacao - 88) * 30) + ((kitSuplemento - 44) * 15);
            }
           
                else if(kitAlimentacao >= 70 && kitSuplemento>= 35){
                pontosKitAlimentacao = 4000 + ((kitAlimentacao - 70) * 30 + (kitSuplemento - 35) * 15);
            }
                else if(kitAlimentacao >= 44 && kitSuplemento>= 22){
                pontosKitAlimentacao = 2500 + ((kitAlimentacao - 44) * 30 + (kitSuplemento - 22) * 15);
            }
                else if(kitAlimentacao >= 18 && kitSuplemento>= 9){
                pontosKitAlimentacao = 1000 + ((kitAlimentacao - 18) * 30 + (kitSuplemento - 9) * 15);
            }
                else{
                pontosKitAlimentacao = 0;
            }
            }

            else if(equipe == "Vermelha")
            {
        
           
        
                if(kitAlimentacao >= 93 && kitSuplemento >= 47){
                        pontosKitAlimentacao = 5000 + ((kitAlimentacao - 93) * 30) + ((kitSuplemento - 47) * 15);
                }
               
                    else if(kitAlimentacao >= 74 && kitSuplemento>= 38){
                    pontosKitAlimentacao = 4000 + ((kitAlimentacao - 74) * 30 + (kitSuplemento - 38) * 15);
                }
                    else if(kitAlimentacao >= 47 && kitSuplemento>= 24){
                    pontosKitAlimentacao = 2500 + ((kitAlimentacao - 47) * 30 + (kitSuplemento - 24) * 15);
                }
                    else if(kitAlimentacao >= 19 && kitSuplemento>= 9){
                    pontosKitAlimentacao = 1000 + ((kitAlimentacao - 19) * 30 + (kitSuplemento - 9) * 15);
                }
                    else{
                    pontosKitAlimentacao = 0;
                }
                }


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