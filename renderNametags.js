//Found out how to use .map online using arrow function so I applied it and it worked. 
//But I couldn't figure out how to use it without the arrow function though so I researched and rewrote it below this function.
 function renderNametags(nametags) {
    return nametags.map(e =>
    `
        <div class="row d-flex justify-content-center mt-5">
            <div style="text-align: center; border: 2px solid grey; width: 250px">
            <h1 style="padding: 10px; background-color: blue; color: white; font-size: 20px">Hello, my name is:</h1>
            <p style="height: 50px; font-size: 20px">${e}</p>
            </div>
        </div>
    `
    ).join(" ");
}; 


//Remade without arrow function to make sure I understood what was happening
/* function renderNametags(nametags) {
    function makeOne (e){
    return `
        <div class="text-center mt-5">
            <div style="border: 2px solid grey; width: 250px">
            <h1 style="padding: 10px; background-color: blue; color: white; font-size: 20px">Hello, my name is:</h1>
            <p style="height: 50px; font-size: 20px">${e}</p>
            </div>
        </div>
    `
    };

    var newArr = nametags.map(makeOne).join("")
    return newArr;
}; */


function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}