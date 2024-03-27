const https = require("https");
const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream('./logs.txt'));

function sendMesaageWhatsapp(data) {
  const options = {
    host:"graph.facebook.com",
    path: `/v18.0/${process.env.ID}/messages`,
    method: "POST",
    body: data,
    // TODO: Colocar token Bearer
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.METABASE
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