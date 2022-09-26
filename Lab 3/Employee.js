//TODO - Create Employee Module here and export to use in index.js

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]

exports.employee = () => {
    let employeeDetails = JSON.stringify(employees, null, 4);
    return employeeDetails;
}

exports.employeeName = () => {
    const employeeNames = [];
    for (let i = 0; i < employees.length; i++){
        employeeNames.push(employees[i].firstName + ' ' + employees[i].lastName);
    }
    employeeNames.sort(function (a, b){
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    })
    return JSON.stringify(employeeNames, null, 2);
}

exports.employeeSalary = () => {
    let totalSalary = 0;
    for (let i = 0; i < employees.length; i++){
        totalSalary = totalSalary + employees[i].Salary;
    }
    return JSON.stringify("total_salary: " + totalSalary);
}