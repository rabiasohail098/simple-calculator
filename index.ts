#! /usr/bin/env node

import inquirer from "inquirer";
const cal = await inquirer.prompt([{
    message: "Enter your first number",
    type: "number",
    name: "num1",
},
{message: "Enter your second number",
type: "number",
name: "num2",
},{
    message: "Select your operator",
    type: "list",
name: "operator",
choices: ["Addition","Subtraction","Multiplication","Division","Percentage","Modulus"]},
]);
console.log(cal);
if (cal.operator==="Addition"){
    console.log(cal.num1 + cal.num2)
}else if (cal.operator==="Subtraction"){
    console.log(cal.num1 - cal.num2)
}else if (cal.operator==="Multiplication"){
    console.log(cal.num1 * cal.num2)
}else if (cal.operator==="Division"){
    console.log(cal.num1 / cal.num2)
}else if (cal.operator==="Percentage"){
    console.log((cal.num1 / cal.num2) * 100, "%")
}else if (cal.operator==="Modulus"){
    console.log(cal.num1 % cal.num2)
}else{
    console.log("Please select valid operator.")
};