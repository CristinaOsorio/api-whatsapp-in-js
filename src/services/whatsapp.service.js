const https = require("https");
const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream('./logs2.txt'));

function sendMesaageWhatsapp(data ) {
  const options = {
    host:"graph.facebook.com",
    path: "/v16.0/101021989421165/messages",
    method: "POST",
    body: data,
    // TODO: Colocar token Bearer
    headers: {
      "Content-Type": "application/json",
      Authorization: ""
    }
  }

  myConsole.log({options});

  const req = https.request(options, res => {
    res.on("data", d => {
      process.stdout.write(d);
    });
  });

  req.on("error", error => {
    myConsole.error(error)
  })

  req.write(data);
  req.end();

}

module.exports = { sendMesaageWhatsapp }