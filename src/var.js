const filePath = './data.json';

let prompt1 = [{
        type: 'list',
        name: 'selectedProcess',
        message: 'choose a banking process:',
        choices: ['New account', 'Login']
}]

export  {
    prompt1,
    filePath,
};
//['Deposit', 'Withdrawal', 'Transfer', 'Check Balance']