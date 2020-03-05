//I did the circles one first so this one was simple
function renderRectangle(rectangle) {
    return `
        <div class="row d-flex justify-content-center mt-5">
            <div style = "background-color: ${rectangle.color}; height: ${rectangle.height}px; width: ${rectangle.width}px"></div>
        </div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}