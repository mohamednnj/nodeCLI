import {Command} from 'commander';
import fs from 'fs';
import inquirer from 'inquirer';
import {prompt1} from'./src/var.js';
import {newAccount} from "./src/newProcess.js";
const program = new Command();

program
    .name('osama elsey Elsery')
    .description('This is a simple banking system')
    .version('1.0.0');

program.command('newProcess')
    .description('help create a new banking process')
    .action(() => {
        inquirer.prompt(prompt1)
            .then(answers => {
            let process = answers.selectedProcess;
            if (process === 'New account'){
                newAccount();
            }
            else{

            }
        }).catch(err => {
            console.error('Error:', err.message);
        });
    });

program.parse();

//osama elsery