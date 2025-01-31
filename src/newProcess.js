import inquirer from "inquirer";
import {prompt3} from "./var.js";
import newUser from './newUser.js';
import {writeData} from "./fileHandel.js";

// import inquirer from 'inquirer';

async function newAccount() {
    let newUserObj = await newUser();
    console.log("newAccount", newUserObj)
    writeData(newUserObj);
}

function baseProcess(){
    inquirer.prompt(prompt3)
        .then(data=>{
            let process = data.selectedProcess
            switch (process) {
                case "Deposit":
                    
            }
        })
}
export {
    newAccount,
    baseProcess,
}