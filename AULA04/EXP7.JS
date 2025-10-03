let idade = Number(prompt("DIGITE A IDADE PARA INDICAR A FAIXA ETARIA: "));


if (idade <= 2 ) {
    console.log("BEBE");
} else if (idade > 2 && idade <= 11) { console.log("CRIANÇA") }
  else if (idade > 11 && idade <= 18) { console.log ("ADOLESCENTE")}
  else if (idade > 18 && idade <= 65) { console.log (" ADULTO ")}
  else { console.log ("IDOSO")}
        
