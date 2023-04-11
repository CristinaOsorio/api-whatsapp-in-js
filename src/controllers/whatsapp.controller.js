const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream('./logs.txt'));


const VerifyToken = (req, res ) => {

  try {
    let accessToken = "p8xuH!n0=JeDx1j7hSUVv=O2pgbjHEAJgfciuyPW4qb5N6mbnhKUI/M!/V91NDBgz0Zs8n5TRqbj8v=Ji?1d2jTAq=f86qwDpNoL0YFsMKB!Xlytasv2eKsLSo00=SDGtIJDsZzAJ/nuW1pSOI150aSl7BAq3AX90hpK3!QSqn-P-wMQ5ACFZ1PPkVq8ZqMk!-qjR89rKgyI3bLvuyj?1x3XzP8tloMDHMbTtDekWDpHZ6t-/pQFO4q=aIg5x9EN";
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    if (challenge != null && token != null && accessToken) {
      res.send(challenge)
    } else {
      res.status(400).send() 
    }
  } catch (error) {
    res.status(400).send()
  }
}


const ReceivedMessage = (req, res ) => {
  try {
    const entry = (req.body["entry"])[0];
    const changes = (entry["changes"])[0];
    const value = changes['value'];
    const messageObject = value['messages'];

    myConsole.log({messageObject});
    
    if (typeof messageObject != 'undefined') {
      const message = messageObject[0]; 
      const text = getTextUser(message);
      myConsole.log({text});
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