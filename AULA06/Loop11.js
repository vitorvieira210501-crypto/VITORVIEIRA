let vas = 0
let fla = 0
let bot = 0
let flu = 0
let time = 0
let out = 0 


for (i = 0; i <= 10; i++) {
    time = prompt(" QUAL É O SEU TIME: ")

    switch (time) {

        case "vas":
            vas++;
            break
        case "fla":
            fla++;
            break
        case "bot":
            bot++;
        case "flu":
            flu++;
            break
        default: 
         out++;

    }
    
}

document.write ( "VASCO = " + vas++ + "<br>")
document.write ( "FLAMENGO = " + fla++ + "<br>")
document.write ( "FLUMINENSE = " + flu++ + "<br>")
document.write ( "BOTAFOGO = " + bot++ + "<br>")
document.write ( "OUTROS = " + out++ + "<br>")

