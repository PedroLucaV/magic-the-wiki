const baseURL = 'https://api.magicthegathering.io/v1/cards';

async function loadCards(baseURL, id){
    try {
        const response = await fetch(`${baseURL}/${id}`)
        if(!response.ok){
            throw new Error('Error trying to load the card')
        }
        return await response.json()
    } catch (error){
        console.error(error)
        throw error
    }
}

async function load(){
    const urlParams = new URLSearchParams(window.location.search)
    const idParam = urlParams.get('id')

    if(!idParam){
        console.error('ID not found')
    }

    const urlBase = `https://api.magicthegathering.io/v1/cards`

    try {
        const card = await loadCards(urlBase, id)
        console.log('card:', card)
    }catch(error){
        console.error('Error trying to load the card')
    }
}

load()