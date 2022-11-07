var page = -1

function pokeload(){
    page ++
    const card = document.querySelector(".card")

    fetch("https://pokeapi.co/api/v2/pokemon?limit=16&offset=" + (page * 16))
    .then(res => { return res.json() })
    .then(item =>{
        item.results.forEach(data =>{
            
            fetch(data.url)
            .then(res => { return res.json() })
            .then(item =>{

                    let i = card.cloneNode(true)

                    i.classList.remove("model")

                    i.querySelector("#pokeImg").src = item.sprites.versions['generation-v']['black-white'].animated.front_default;

                    document.querySelector(".page").appendChild(i)
                    i.querySelector("#pokeName").innerHTML = data.name
            })
        })
    })
}