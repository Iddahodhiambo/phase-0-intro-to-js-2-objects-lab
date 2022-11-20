

const employee = {
    name: "George",
    streetAddress: "Nairobi",
};
function updateEmployeeWithKeyAndValue(employee,key,value) {
    const newObj = {...employee}
    newObj[key] = value;
    return newObj;
}
 updateEmployeeWithKeyAndValue(employee,"name","Sam") 

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    employee[key]= value;
    return employee;

 }
 destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress","12 Broadway")
 

 function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee}
    delete newObj[key]
    return newObj;
 }
 deleteFromEmployeeByKey(employee, name);

 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, name);




