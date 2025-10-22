function sortearcarta(){
    let valores = ['ás', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'valete', 'dama', 'rei']
    let naipes = [ 'Copas', 'Ouro', 'Paus','Espada']
    let valor = valores [Math.floor(Math.random()*valores.length)]
    let naipe = naipes [Math.floor(Math.random()*naipes.length)]
    console.log("A carta sorteada foi: " + valor + ' de ' + naipe)
}

sortearcarta()