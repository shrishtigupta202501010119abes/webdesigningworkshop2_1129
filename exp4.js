function calculateResult(){
    let n = document.getElementById("subject").value;
    let total = 0;
    for(let i=1; i<=n; i++){
        let marks = parseFloat(prompt("Enter marks for subject "+i ));
        total += marks;// total = total + marks
    }
    let average = total / n;
    let grade;
    let result;
    if(average >= 90){
        grade = "A";
        
    }
    else if(average >= 80){
        grade = "B";
        
    }else if(average >= 70){
        grade = "C";
        
    }else if(average >= 60){
        grade = "D";
        
    }else if(average >= 50){
        grade = "E";
        
    }else {
        grade = "F";
        
    }
    
    result = (average>=40) ? "Pass" : "Fail";
    document.getElementById("result").innerHTML = "Average: " + average.toFixed(2) + "<br>Grade: " + grade + "<br>Result: " + result;
    }