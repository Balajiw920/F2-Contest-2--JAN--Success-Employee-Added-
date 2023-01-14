let employees = [];
let employeeId = 1;

function adduser() {
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const age = document.getElementById("age").value;

    if (!name || !profession || !age) {
        document.getElementById("error").innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !";
        document.getElementById("success").innerHTML = "";
    } else {
        document.getElementById("error").innerHTML = "";

        const employee = { id: employeeId, name: name, profession: profession, age: age };
        employees.push(employee);
        employeeId++;

        document.getElementById("success").innerHTML = "Success : Employee Added!";
        renderEmployeeList();
    }
}

function renderEmployeeList() {
    const employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = "";

    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        employeeList.innerHTML += `
<tr>
<td>${employee.id}</td>
<td>${employee.name}</td>
<td>${employee.profession}</td>
<td>${employee.age}</td>
<td><button onclick="deleteEmployee(${employee.id})" style="border-radius: 50px;">Delete</button></td>
</tr>
`;
    }
}

function deleteEmployee(id) {
    const updatedEmployees = employees.filter(employee => employee.id !== id);
    employees = updatedEmployees;
    renderEmployeeList();
}