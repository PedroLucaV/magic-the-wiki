async function fetchAndDisplayCard() {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');

    if (!idParam) {
        console.error('ID not found');
        return;
    }

    const baseURL = 'https://api.magicthegathering.io/v1/cards';

    try {
        const response = await fetch(`${baseURL}/${idParam}`);
        if (!response.ok) {
            throw new Error('Failed to fetch card');
        }
        const card = await response.json();

        // Exibir as informações da carta
        showCardDetails(card);
    } catch (error) {
        console.error('Error fetching card:', error);
    }
}

function checkImg(cardUrl){
    if(cardUrl === undefined){
        return '../img/empty-card.jpg'
    }else{
        return cardUrl
    }
}

function showCardDetails(cardData) {
    const cardContainer = document.getElementById('cards-container');
    const divCards = document.createElement('div');
    divCards.classList.add('card-box');
    if(cardData.card.imageUrl === undefined){
        alert("THE FOLOWING CARD DOES'NT HAVE IMAGE IN THEIR DATABASE!")
    }

    const cardDetails = `
    <div class="card-details">
        <div class="name-card">
            <h3>${cardData.card.name}</h3>
        </div>
        <div class="cards-detail">
            <p>Mana Cost: ${cardData.card.manaCost}</p>
            <p>Rarity: ${cardData.card.rarity}</p>
            <p>Type: ${cardData.card.type}</p>
            <a href="https://api.magicthegathering.io/v1/sets/${cardData.card.set}">
                <p>Sets: ${cardData.card.set}</p>
            </a>
        </div>
        <div class='card-image'>
            <img src="${checkImg(cardData.card.imageUrl)}" alt="image of ${cardData.card.name}">
        </div>
    </div>`;
    divCards.innerHTML = cardDetails;

    cardContainer.appendChild(divCards);
}

fetchAndDisplayCard();
