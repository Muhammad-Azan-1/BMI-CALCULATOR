#!/usr/bin/env node

//BMI-Calculator

import inquirer from "inquirer";

let asnwer = await inquirer.prompt([

{message:"Please enter your weight in KG(Kilograms) = ", type:"number", name:"WeightInKg"},
{message:"Please enter your height in CM(Centimeters) = ", type:"number", name:"HeightInM"},


])

//condtional statements



if(!isNaN(asnwer.WeightInKg)  && !isNaN(asnwer.HeightInM)){


    console.log("Your BMI is =", asnwer.WeightInKg / asnwer.HeightInM ** 2)
}else{


    console.log("Please Input a valid number")
}