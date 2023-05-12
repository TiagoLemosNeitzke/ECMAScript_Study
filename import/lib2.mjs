export async function getAddressByCEP(cep){
    return await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
}