console.log("Ouiiiiiiii ça marche 😊");

const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40"

fetch(url)
.then(reponse=>reponse.json())
.then(pokemons=>{
    console.log(pokemons);    
})

