const vinhos = [
    {
        nome: "Agnello Rosé D'Été",
        tipo: "Rosé",
        safra: 1997,
        estoque: 10,
    },
    {
        nome: "Pétalas de Quartz",
        tipo: "Branco",
        safra: 2014,
        estoque: 12,
    },
    {
        nome: "Luar de Inverno Chardonnay",
        tipo: "Tinto",
        safra: 2001,
        estoque: 7,
    },
    {
        nome: "Sauvignon Blanc",
        tipo: "Tinto",
        safra: 1989,
        estoque: 3,
    },
]

const listVinhos = document.getElementById('lista-vinhos');

/////////////////////////////////////////////////////////

vinhos.forEach((vinho) => {

    listVinhos.innerHTML += `
        <div class="card">
            <h2>${vinho.nome}</h2>
            <p><strong>Tipo: </strong> ${vinho.tipo}</p>
            <p><strong>Safra: </strong> ${vinho.safra}</p>
            <p><strong>Estoque: </strong> ${vinho.estoque}</p>
        </div>
    `
})

//////////////////////////////////////////


let contador = 0;
let totalEstoqueBaixo = 0;


const botaocadastro = document.getElementById("cadastro");
const botaoSobre = document.getElementById("sobre");

////////////////////////////////////////////////

function estoqueBaixo(quantidade) {
    return quantidade < 5;
}

//////////////////////////////////////////////////////////////////

function validarEntrada(texto) {

    while (texto === null || texto.trim() === "") {
        texto = prompt("Entrada inválida. Digite novamente:");
    }

    return texto.trim();
}

////////////////////////////////////////////////////////

function validarNumero(numero) {

    while (isNaN(numero) || numero < 0) {
        numero = Number(prompt("Digite um número válido:"));
    }

    return numero;
}

/////////////////////////////////////////////////////

botaocadastro.addEventListener("click", function (event) {

    event.preventDefault();

    let continuar = true;

    while (continuar) {

        let nome = validarEntrada(
            prompt("Digite o nome do vinho:")
        );

        let tipo = validarEntrada(
            prompt("Digite o tipo do vinho:")
        );

        let safra = validarNumero(
            Number(prompt("Digite a safra do vinho:"))
        );

        let quantidade = validarNumero(
            Number(prompt("Digite a quantidade em estoque:"))
        );

        //////////////////////////////////////////////

        const novoVinho = {
            nome,
            tipo,
            safra,
            estoque: quantidade
        };

        //////////////////////////////////////////////////////

        vinhos.push(novoVinho);

        ///////////////////////////////////////////////////////////
        

        vinhosEstoqueBaixo = vinhos.filter((vinho) => {
            return vinho.estoque < 5;
        });

        console.log("===== VINHOS COM ESTOQUE BAIXO =====");
        vinhosEstoqueBaixo.forEach((vinho) => {
            console.log(vinho.nome);
        });

        ///////////////////////////////////////////////////////
        

        estoqueTotal = vinhos.reduce((total, vinho) => {
            return total + vinho.estoque;
        }, 0);

        console.log("=== ESTOQUE TOTAL ===");
        console.log(estoqueTotal);

        ////////////////////////////////////////////////////////////
        

        nomesMaiusculos = vinhos.map((vinho) => {
            return vinho.nome.toUpperCase();
        });

        console.log("=== NOMES EM MAIÚSCULO ===");
        console.log(nomesMaiusculos);

        ////////////////////////////////////////////////////////

        listVinhos.innerHTML += `
            <div class="card">
                <h2>${novoVinho.nome}</h2>
                <p><strong>Tipo: </strong> ${novoVinho.tipo}</p>
                <p><strong>Safra: </strong> ${novoVinho.safra}</p>
                <p><strong>Estoque: </strong> ${novoVinho.estoque}</p>
            </div>
        `;

        /////////////////////////////////////////////////////

        contador++;

        if (estoqueBaixo(quantidade)) {
            totalEstoqueBaixo++;
        }


        //////////////////////////////////////////////////////

        let resposta = validarEntrada(
            prompt("Deseja cadastrar outro vinho? (sim/não)")
        );

        if (resposta.toLowerCase() !== "sim") {

            continuar = false;

        }
    }

    ////////////////////////////////////////////////////////

    alert(
        "===== RELATÓRIO FINAL =====" +
        "\nTotal de vinhos cadastrados: " + contador +
        "\nTotal com estoque baixo: " + (totalEstoqueBaixo + 1) +  // O + 1 conta com o Sauvignon Blanc que já tem um estoque baixo.
        "\nEstoque total: " + estoqueTotal                         // se o estoque for baixo do vinho cadastrado, ele soma com o 1 do padrão.
    );
});

/////////////////////////////////////////////////////

botaoSobre.addEventListener("click", function (event) {

    event.preventDefault();  // evita do site recarregar ao acabar o alert

    alert(
        "A Vinharia Agnello é um sistema de cadastro de vinhos que permite registrar informações, controlar o estoque e organizar os vinhos cadastrados."
    );

});