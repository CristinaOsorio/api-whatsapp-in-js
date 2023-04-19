const whatsappModel = require("./whatsapp.model")
const whatsappService = require("../services/whatsapp.service");


function proccess(textUser, number) {
  textUser = textUser.toLowerCase();

  let models =  [];

  if(textUser.includes("hola")) {
    let model = whatsappModel.messageText("Hola, un gusto", number);
    models.push(model)
  } else if (textUser.includes("gracias")) {
      
    let model = whatsappModel.messageText("GRacias a ti por escribir", number);
    models.push(model)
  } else if (textUser.includes("adios") || textUser.includes("bye") || textUser.includes("me voy")) {
    let model = whatsappModel.messageText("GRacias a ti por escribir", number);
    models.push(model)
  } else {
    let model = whatsappModel.messageText("No entiendo lo que dices", number);
    models.push(model)
  }

  models.forEach(model => {
    whatsappService.sendMesaageWhatsapp(model);
  });
  
}


module.exports = {
  proccess
}