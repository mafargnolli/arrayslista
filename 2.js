const letras = ["A", "a", "B", "C", "L", "z"];

// seu codigo aqui
let quantidade = 0;

for(let letra of letras) {
    if (letra === "E" || letra === "e"){
        quantidade++;
        console.log(quantidade);
    }else{
        console.log("Nao ha E ou e no conjunto.");
    }break
}

