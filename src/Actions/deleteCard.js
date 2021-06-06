export const deleteCard = (id) => {
    console.log(id)
    fetch(`https://astri-be.herokuapp.com/tinder/remove`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id }),
    })
    // .then(r => r.json())
    // .then(d => alert(d))
}