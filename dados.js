async function buscarDados(url) {
    try {
        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error(`Falha na requisição -  Status: ${resposta.status}`);
        }
        console.log(resposta.status)
        const dadosJson = await resposta.json();
        console.log(dadosJson);
        return dadosJson;
    } catch (erro) {
        console.error("Erro na captura", erro.message);
    }
}

buscarDados("https://jsonplaceholder.typicode.com/todos/");

