const baseURL = 'https://api.magicthegathering.io/v1'

const loadCards = async () =>{
    const res = await fetch(`${baseURL}/cards`)
    const data = await res.json();
    return await data
}

const loadAllWithPromiseAll = async () =>{
    const [cards] = await Promise.all([
        loadCards(),
    ])

    console.log(cards)
    showCards(cards.results)
}

loadAllWithPromiseAll()

function showCards(cards){
    // const cardsContainer = document.getElementById("cards-container")
    // cards.map((cards) =>{
    //     console.log(cards.id)
    // })
}