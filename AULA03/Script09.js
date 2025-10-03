let salario = Number(prompt(" Qual é o salario?"));
let vt = salario * 0.6; 


if (salario < 2500) {
    inss1 = salario * 8 / 100 
    document.write(" desconto do inss é 8%: ", inss1)}
 else { (inss2 = salario * 11 / 100); 
    document.write( " desconto do inss é 11%: ", inss2)}
     