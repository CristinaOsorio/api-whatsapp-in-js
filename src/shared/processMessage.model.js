const whatsappModel = require("./whatsapp.model")
const whatsappService = require("../services/whatsapp.service");


function proccess(textUser, number) {
  textUser = textUser.toLowerCase();

  let models =  [];

  if(textUser.includes("hola")) {
    let model = whatsappModel.messageText("Hola, un gusto", number);
    models.push(model);
    let modelList = whatsappModel.messageList(number);
    models.push(modelList); 
   } else if (textUser.includes("adios") || textUser.includes("bye") || textUser.includes("me voy")) {
    let model = whatsappModel.messageText("Gracias a ti por escribir", number);
    models.push(model);
  } else if (textUser.includes("comprar")) {
    let model = whatsappModel.messageButton(number);
    models.push(model);
  } else if (textUser.includes("vender")) {
    let model = whatsappModel.messageText("Registrate en el siguiente formulario para poder evaluarte: https://form.jotform.com/222507994363665", number);
    models.push(model);
  } else if (textUser.includes("agencia")) {
    let model = whatsappModel.messageLocation(number);
    models.push(model);
  } else if (textUser.includes("contacto")) {
    let model = whatsappModel.messageText("*Centro de contacto:* \n 8546987459", number);
    models.push(model);
  } else {
    let model = whatsappModel.messageText("No entiendo lo que dices", number);
    models.push(model);
  }

  models.forEach(model => {
    whatsappService.sendMesaageWhatsapp(model);
  });
  
}


module.exports = {
  proccess
}