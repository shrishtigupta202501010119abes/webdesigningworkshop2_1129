let employees = [];

function addEmployee() {

    let name = document.getElementById("name").value;
    let empId = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let department = document.getElementById("department").value;

    let employee = {
        name: name,
        id: empId,
        salary: salary,
        department: department
    };

    employees.push(employee);

    document.getElementById("output").innerHTML = "Employee Added Successfully!";
}

function displayEmployees(){

    let result = "";

    employees.forEach(emp=>{
        result += `Name: ${emp.name}, ID: ${emp.id}, Salary: ${emp.salary}, Department: ${emp.department}<br>`;
    });

    document.getElementById("output").innerHTML = result;
}

function filtersalary(){

    let filtered = employees.filter(emp => emp.salary > 50000);

    let result = "";

    filtered.forEach(emp=>{
        result += `${emp.name} - ${emp.salary}<br>`;
    });

    document.getElementById("output").innerHTML = result;
}

function totalSalary(){

    let total = employees.reduce((sum, emp)=> sum + emp.salary ,0);

    document.getElementById("output").innerHTML = "Total Salary: " + total;
}

function averageSalary(){

    let total = employees.reduce((sum, emp)=> sum + emp.salary ,0);

    let avg = total / employees.length;

    document.getElementById("output").innerHTML = "Average Salary: " + avg;
}

function countDepartments(){

    let dept = {};

    employees.forEach(emp=>{
        if(dept[emp.department]){
            dept[emp.department]++;
        }else{
            dept[emp.department] = 1;
        }
    });

    let result = "";

    for(let d in dept){
        result += d + " : " + dept[d] + "<br>";
    }

    document.getElementById("output").innerHTML = result;
}