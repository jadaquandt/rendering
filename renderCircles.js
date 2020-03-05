
//I had DIR assistance from Reena starting this one out but finished out the .map at home

function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    function makeCircle (circles){
        return `
            <div class="row d-flex justify-content-center mt-5">
                <div style="background-color: ${circles.color}; height: ${circles.radius}px; width: ${circles.radius}px; border-radius: ${circles.radius}px;"></div>
            </div>
        `
    }

   return circles.map(makeCircle).join('');
};

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}