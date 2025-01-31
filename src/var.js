const filePath = 'data.json';

let prompt1 = [{
    type: 'list',
    name: 'selectedProcess',
    message: 'choose operation:',
    choices: ['New account', 'Login']
}]
let prompt2 = [{
    type: 'string',
    name: 'name',
    message: 'enter your name:',
    },
    {
        type: 'number',
        name: 'age',
        message: 'enter your age:',
    },
    {
        type: 'number',
        name: 'cardNumber',
        message: 'enter your cardNumber:',
    },
    {
        type: 'email',
        name: 'email',
        message: 'enter your email:',
    },
    {
        type: 'number',
        name: 'phone',
        message: 'enter your phone number +20 ',
    },
    {
        type: 'confirm',
        name: 'isActive',
        message: 'is your account active?',
        default: true,
    },
    {
        type: 'list',
        name: 'hobbies',
        message: 'choose your hobbies:',
        choices: ['Reading', 'Coding', 'Gardening', 'Cooking']
    },
    {
        type: 'input',
        name: 'city',
        message: 'enter your city:',
    },
    {
        type: 'number',
        name: 'zip',
        message: 'enter your zip code:',
    }];
let prompt3 = [{
    type: 'list',
    name: 'selectedProcess',
    message: 'choose a banking process:',
    choices: ['Deposit', 'Withdrawal', 'Transfer', 'Check Balance']
}]
export {
    prompt1,
    prompt2,
    filePath,
    prompt3,
};