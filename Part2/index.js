// console.log('hello there')

const getID = document.getElementById('idInput');
const getStyle = document.getElementById('styleInput');
// console.log(getID, getStyle)

function setCard(){
    const card = document.getElementById(getID.value);
    console.log(card);

    card.style.color = styleInput.value;
}