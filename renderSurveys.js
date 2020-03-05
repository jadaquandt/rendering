//Mapped through multiple times to get down to the options and then went from there with styling
//Struggling to find the right logic to display my radio buttons

function renderSurveys(surveys) {

    var surveyTitle = surveys.map (survey => {
        var buttonText = survey.submitButtonText;
        var surveyFields = survey.fields.map (response => {
         return   `
        <div class="text-left">
            <h2 style ="font-size: 18px; font-weight: 300">${response.label}</h2>
            <div class="form-check p-0">
            <input class="form-check-input" type="${response.type}" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                <label class="form-check-label text-capitalize" for="exampleRadios">
                ${response.options}
                </label>
                <br>
                <button type="button" class="btn btn-primary mt-5">${buttonText}</button>
        </div>
    `
        });
        return `
        <div class="text-left mt-5">
            <h1>${survey.title}</h1>
            <hr>
        </div>
        ${surveyFields.join("")}
    `
    })
    return `
        ${surveyTitle.join("")}
    `
   /*
    var surveyFields = name.title.map (response => {
        return
    })

    var surveyResponses = response.fields.map(option => {
        return `${option.options}`
    })*/
}

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}