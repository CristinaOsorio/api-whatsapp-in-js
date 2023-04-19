const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream('./logs.txt'));
const processMessage = require("../shared/processMessage.model")

const VerifyToken = (req, res ) => {

  try {
    // TODO: Crear token de acceso
    let accessToken = "";
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    if (challenge != null && token != null && accessToken) {
      res.send(challenge)
    } else {
      myConsole.log(error);
      res.status(400).send() 
    }
  } catch (error) {
    myConsole.log(error);
    res.status(400).send()
  }
}


const ReceivedMessage = (req, res ) => {
  try {
    const entry = (req.body["entry"])[0];
    const changes = (entry["changes"])[0];
    const value = changes['value'];
    const messageObject = value['messages'];
   
    if (typeof messageObject != 'undefined') {
      const messages = messageObject[0]; 
      const numberFrom = messages["from"];
      const text = getTextUser(messages).toLowerCase();
      // TODO: In the case of Mexico, the number is returned with the structure 521 for the sending to update to 52 to work.
      const number = numberFrom.slice(0, 2) + numberFrom.slice(3);
      myConsole.log({text});
      myConsole.log({number});

    
      if (text != "") {
        processMessage.proccess(text, number);
      }
    }
    res.send("EVENT_RECEIVED");
  } catch (error) {
    myConsole.log(error);
    res.send("EVENT_RECEIVED");
  }
}

function getTextUser(messages) {
  let text = "";
  const typeMessage = messages['type'];

  if(typeMessage == "text") {
    text = (messages["text"]["body"]);
  } else if (typeMessage == 'interactive') {

    const interactiveObject = messages['interactive'];
    const typeInteractive = interactiveObject["type"];

    text = (typeInteractive == "button_reply") 
      ? (interactiveObject["button_reply"])["title"] 
      : (typeInteractive == "list_reply") 
        ? (interactiveObject["list_reply"])["title"] : '';    

  }

  return text;

}

module.exports = {
  VerifyToken,
  ReceivedMessage
}