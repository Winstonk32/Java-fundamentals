function displayGradeMessage() {
    const grade = document.getElementById('gradeInput').value;
    const messageElement = document.getElementById('resultMessage');


    switch(grade.toUpperCase()) {
        case 'A': 
            console.log("Excellent! You scored an A.");
            break;
        case 'B':
            console.log("Great job! You scored a B.");
            break;
        case 'C':
            console.log("Good effort! You scored a C.");
            break;
        case 'D':
            console.log("You passed, but there's room for improvement. You scored a D.");
            break;
        case 'E':
            console.log("You need to work harder. You scored an E.");
            break;
        default:
            console.log("Invalid grade. Please enter a grade between A and E.");
    }
}

