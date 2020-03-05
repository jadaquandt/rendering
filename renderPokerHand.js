//Used .map feature to map out the pokerHandAbstraction and then tried to use that array to grab 
//the picture from the folder and it worked!
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    return pokerHand.map(e =>
        `
            <div class="mt-5 ml-3" style="display: inline-flex">
                <div style="display: inline">
                <img style="display: inline; height: 100px" src="cards/${e.value}${e.suit}.png">
                </div>
            </div>
        `
        ).join("");
    }; 

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}