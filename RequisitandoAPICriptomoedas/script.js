let apiKey = {
    key: '9ce18db3-32ab-47c6-811e-5fd1f4328778'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey.key)
    .then((response) => {
        if(!response.ok) throw new Error("Erro ao executar a requisição, status " + response.status)
        return response.json()
    })
    .then((api) => {
        let texto = ""

        for(let i = 0; i < 10; i++){

            texto = texto + `
            
            <div class="media">
                <img src="pexelsCoins.jpg" class="align-self-center mr-3" alt="coin" width="100px" heigth="60px">
                <div class="media-body">
                <h5 class="mt-2">${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
                <p>${api.data[i].first_historical_data}
                </div>
            </div>
            
            `
            document.getElementById("coins").innerHTML = texto
        }

    })
    .catch((error) => {
        console.error(error.message)
    })
