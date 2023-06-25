import inquirer from "inquirer";
const answer : {
    numberone: number,numbertwo: number, operators: string
} = await inquirer.prompt([
    {
        type: 'number',
        name: 'numberone',
        message: 'Enter your first number:'
    },
    {
        type: 'number',
        name: 'numbertwo',
        message: 'Enter your second number:'
    },
    {
        type: 'list',
        name: 'operators',
        choices: ["+", "-", "*", "/", "%"],
        message: 'Which operator you want to select:'
    },
]);

console.log(answer)
const {numberone, numbertwo, operators}= answer;
if(numberone && numbertwo && operators) {
    let result: number = 0;
    if(operators === "+"){
        result= numberone+numbertwo
    }else if(operators === "-"){
        result= numberone-numbertwo
    }else if(operators === "*"){
        result= numberone*numbertwo
    }else if(operators === "/"){
        result= numberone/numbertwo
    }else if(operators === "%"){
        result= numberone%numbertwo
    }
    console.log("your result is :", result);
}else{
    console.log("kindly enter valid input")
}