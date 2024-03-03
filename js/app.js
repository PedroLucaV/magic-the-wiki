const baseURL = 'https://api.magicthegathering.io/v1'
const prevPage = document.getElementById('previous-page')
const nextPage = document.getElementById('next-page')
const pageNumber = document.getElementById('page-count')

let page = 1
let start = 0
let end = 10

pageNumber.innerHTML = page

nextPage.addEventListener('click', ()=>{
    page++
    pageNumber.innerHTML = page
})

prevPage.addEventListener('click', ()=>{
    if(page == 1){
        
    }else{
        page--
        pageNumber.innerHTML = page
    }
})


const loadCards = async () =>{
    const res = await fetch(`${baseURL}/cards`)
    const data = await res.json();
    const limitData = data.cards.slice(start, end)
    return {cards: limitData}
}

const loadAllWithPromiseAll = async () =>{
    const [cards] = await Promise.all([
        loadCards()
    ])

    console.log(cards.cards)
    showCards(cards.cards)
}

function checkImg(cardUrl){
    if(cardUrl === undefined){
        return './img/empty-card.jpg'
    }else{
        return cardUrl
    }
}

loadAllWithPromiseAll()



function showCards(cards){
    const cardContainer = document.getElementById('cards-container')
    cards.map((cards) => {
        const divCards = document.createElement('div')
        divCards.id = `card-${cards.number}`
        divCards.innerHTML = `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="./img/magic-card-cover.png" alt="Avatar" style="width:223px;height:310px;">
                </div>
                <div class="flip-card-back">
                <img src="${checkImg(cards.imageUrl)}" alt="Carta ${cards.name}" class="img-card">
                </div>
            </div>
        </div>
        `
        divCards.classList.add('card-box')
        cardContainer.appendChild(divCards)
        divCards.addEventListener('click', async() =>{
            cardPage(cards.id)
        })
    })
}

function cardPage(id){
    window.location.href = `./pages/card-info.html?id=${id}`
}