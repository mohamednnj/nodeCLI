import {prompt2} from "./var.js";
import inquirer from "inquirer";
import {User} from "./obj.js";

function newUser() {
    let newUserObj = Object.assign(User);
    console.log("newUser", newUserObj)
    console.log("User", User)

    // Prompt the user for input
    return inquirer.prompt(prompt2)
        .then(data => {
            newUserObj.name = data.name;
            newUserObj.age = data.age;
            newUserObj.email = data.email;
            newUserObj.cardNumber = data.cardNumber;
            newUserObj.phone = data.phone;
            newUserObj.isActive = data.isActive;
            newUserObj.hobbies.push(data.hobbies);
            console.log("888888", data.hobbies)
            newUserObj.address.city = data.city;
            newUserObj.address.zip = data.zip;


            return newUserObj;
        })
        .catch(err => {
            console.error("Error:", err.message);
            return null;
        });
}

export default newUser;
