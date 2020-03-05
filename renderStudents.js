//Reena helped me finish out this one in class! I had everything except the backgrounds figured out 
//and we worked that out together. It had us both stumped for a second there.

function renderStudents(students) {
        var greenBackground = "background-color: #b2ff46; border: 1px solid black; width: 200px; height: 55px";
        var redBackground = "background-color: red; border: 1px solid black; width: 200px; height: 55px";
        return `<div class="text-center mt-5">
                    <h1>Roll Call!</h1>
                    ${students.map(e=>{
                        return `<div class="mx-auto text-center mt-2" ${e.isPresent ? `style="${greenBackground}"` : `style="${redBackground}"`}>
                            <span style="font-size: 20px">${e.name} </span>
                            <br>
                            <span style="font-weight:700; font-size: 12px"> ${e.isPresent ? "Present" : "Absent"}
                            </span>
                        </div>`
                    }).join(" ")}
            </div>`;
}
//Section below was me struggling with the logic part before asking for assistance in class
/*
function renderStudents(students){

    function studentPresence(students){
        return `
        <div class="text-center mt-5">
            <h1>Roll Call!</h1>
        `
    
        ${if (students.isPresent === true) 
            return 
                <div class="text-center mt-5">
                    <div style="background-color: #b2ff46; border: 1px solid black; width: 200px; height: 50px">
                        <span>${students.name} </span>
                        <br>
                        <span>Present</span>
                    </div>
                </div>
                        
        }
        else if (${students.isPresent} === false)
        {
            return 
                <div class="text-center mt-5">
                    <div style="background-color: red; border: 1px solid black; width: 200px; height: 50px">
                        <span>${students.name} </span>
                        <br>
                        <span>Absent</span>
                    </div>
                </div>
                    
        }
        </div>
        `
    }

    return students.map(studentPresence).join('');
}
*/

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}