/* Used the code that we did in class to finish up my assignment, my code is below it 
Things I had trouble with:
1. I had trouble rendering the text box 
2. I had trouble taking the code from class and merging it with my code*/

function renderSurveys(surveys) {
    var surveyHtmlArray = [];
  
    for (var i = 0; i < surveys.length; i++) {
        surveyHtmlArray.push(renderSingleSurvey(surveys[i]));
    }

    return `
        <div class="text-left mt-5">
            ${surveyHtmlArray.join('')}
        </div>
    `
}

function renderSingleSurvey(survey) {
    // Render a single survey object 
    var fieldsHtmlArray = [];
    fieldsHtmlArray = survey.fields.map(function(e) {
        return renderSurveyFields(e);
    })

    return `
        <h1 style="margin-bottom: 2px;">${survey.title}</h1>
        <hr style="padding: 0px; border: 1px solid black">
        <div class="survey-questions">
            ${fieldsHtmlArray.join('')}
        </div>
        <button class="my-4 btn btn-primary">${survey.submitButtonText}</button>
    `
}

function renderSurveyFields(fields) {
    var optionsHtmlArray = [];
    if (fields.options) {
        optionsHtmlArray = fields.options.map(function(option) {
            return renderSurveyFieldOptions(option);
        })
    }
    return `
        <div>
        <h2 style="font-size:20px">${fields.label}</h2>
        </div>
        ${optionsHtmlArray.join('')}
        </div>
    `
}

function renderSurveyFieldOptions(options) {

    return `
    <div class="text-left">
            <div class="form-check p-1 ml-3">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                <label class="form-check-label text-capitalize" for="exampleRadios">
                ${options}
                </label>
                <br>
        </div>
    `
}


//Mapped through multiple times to get down to the options and then went from there with styling
//Struggling to find the right logic to display my radio buttons
/*
function renderSurveys(surveys) {

    var surveyTitle = surveys.map (survey => {
        var buttonText = survey.submitButtonText;
        var surveyFields = survey.fields.map (response => {
        if (`${response.options}`){
         return   `
        <div class="text-left">
            <h2 style ="font-size: 18px; font-weight: 300">${response.label}</h2>
            <div class="form-check p-3">
            <input class="form-check-input" type="${response.type}" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                <label class="form-check-label text-capitalize" for="exampleRadios">
                ${response.options}
                </label>
                <br>
        </div>
    `}
        });
        return `
        <div class="text-left mt-5">
            <h1>${survey.title}</h1>
            <hr>
        </div>
        ${surveyFields.join("")}
        <button type="button" class="btn btn-primary mt-5 mx-0">${buttonText}</button>
    `
    })
    return `
        ${surveyTitle.join("")}
    `
}
*/

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