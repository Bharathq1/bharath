function getBotResponse(input) {
    //rock paper scissors
    input=input.toLowerCase()
    if (input== "hiii") {
        return "Hello there!how can I help you?";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    if (input == "hello") {
        return "Hello there!how can I help you?";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if(input==""){
        return "Try asking something else!";
    }
    //CommonCold
    if (input == "i need help regarding the medicines to use?") {
        return "Please mention symptoms...";
    } else if (input == "runny or stuffy nose,sore throat,cough") {
        return "It might be CommonCold";
    } else if(input=="help me with the medicine"){
        return "okay!specify the medical history if u have any...";
    }else if(input=="i have no medical history"){
        return "okay!specify the severity(mild,severe,normal)";
    }else if(input=="severe cold"){
        return "medicine:Ibuprofen(200mg)";
    }else if(input=="moderate cold"){
        return "medicine:Ibuprofen(200mg)";
    }else if(input=="normal"){
        return "medicine:Ibuprofen(200mg)";
    }else if(input=="what is the dosage of ibuprofen"){
        return "Every 6-8 hours ";
    }else{
        return"Invalid input!try asking in other way"
    }
}
