function validaIdade(idade) {
    var validar
    if (idade >= 18) {
        validar = true;
    } else {
        validade = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

// function soma(n1, n2) {
//     return n1 + n2;
// }

// function setReplace(frase, nome, novo_nome) {
//     return frase.replace(nome, novo_nome);
// }

// console.log(soma(5, 3));
// console.log(setReplace("Vai Japão", "Japão", "Acre"));
// var d = new Date();
// console.log(d);
// console.log(d.getMonth() + 1);
// console.log(d.getMinutes());
// console.log(d.getHours());



// var count;
// for (count = 0; count < 5; count++){
//     console.log(count);
// }

// var count = 0;
// while (count < 5) {
//     console.log(count);
//     count++;
// }

// var idade = prompt("Qual sua idade");

// if (idade >= 18) {
//     alert("maior de idade");
// } else {
//     alert("menor de idade");
// }

// var frutas = [{ nome: "maçã", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];

// console.log(frutas[1].nome);

// var fruta = { nome: "maçã", cor: "vermelha" }

// console.log(furta.cor);

// var lista = ["maçã", "pera", "laranja"];
// lista.push("uva");
// lista.pop();
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" | "));


// var nome = "Vinícius Grippa";
// var idade = 29;
// var idade2 = 10;

// var frase = "Japão é o melhor time do mundo";

// alert(nome + " tem " + idade + " anos.");
// alert(idade + idade2);
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase);
// console.log(frase.replace("Japão", "Brasil"));
// console.log(frase.toUpperCase());