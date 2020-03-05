//This one had me struggling with changing the rating to pricetags and then a remembered an exercise
//similar to this one that we did in class and with the help of google, I made it happen.


function renderRestaurants(restaurants) {
    
    return restaurants.map(e =>`
        <div style="display: inline-flex" class="row mt-5 ml-3">
                <div style= "background-color: lightgrey" class="card mx-auto">
                    <div class="card-body">
                        <h5 style= "font-weight:700" class="card-title">${e.name}</h5>
                        <p class="card-text">${e.type}</p>
                        <b><p style="color: limegreen; "class="card-text">${addDollarSigns(e.priceRating)}</p></b>
                    </div>
                </div>
        </div>
    `).join("");
}

function addDollarSigns (num){
    return "$".repeat(num);
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];


    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}