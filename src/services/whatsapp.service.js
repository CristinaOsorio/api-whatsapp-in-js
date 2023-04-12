const https = require("https");

function sendMesaageWhatsapp(textResponse, number) {
  const data = JSON.stringify({
    "messaging_product": "whatsapp",    
    "recipient_type": "individual",
    "to": number,
    "type": "text",
    "text": {
        "preview_url": false,
        "body": textResponse
    }
  });

  const options = {
    host:"graph.facebook.com",
    path: "/v16.0/101021989421165/messages",
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      // TODO: Colocar token Bearer
      Authorization: ""
    }
  }

  const req = https.request(options, res => {
    res.on("data", d => {
      process.stdout.write(d)
    });
  });

  req.on("error", error => {
    console.error(error)
  })

  req.write(data);
  req.end();

}

module.exports = { sendMesaageWhatsapp}