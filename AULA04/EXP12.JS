let tempodeserv = Number(prompt("QUAL SEU TEMPO DE SERVIÇO: "));
let cargo = Number(prompt(" QUAL SEU TEMPO DE CARGO" ));
let ferias = 12;


if (tempodeserv > ferias && cargo >= 6) { console.log("VOCE PODE TIRAR FERIAS") }
else { console.log(" VOCE PODE TIRAR FERIAS ")}

