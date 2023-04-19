function messageText(textResponse, number) {
  return JSON.stringify({
    "messaging_product": "whatsapp",    
    "recipient_type": "individual",
    "to": number,
    "type": "text",
    "text": {
        "preview_url": false,
        "body": textResponse
    }
  });
}

function messageList(number){
  return JSON.stringify({
      "messaging_product": "whatsapp",
      "to": number,
      "type": "interactive",
      "interactive": {
          "type": "list",
          "body": {
              "text": "✅ Tengo estas opciones"
          },
          "footer": {
              "text": "Selecciona una de las opciones para poder atenderte"
          },
          "action": {
              "button": "Ver opciones",
              "sections": [
                  {
                      "title": "Compra y vende productos",
                      "rows": [
                          {
                              "id": "main-comprar",
                              "title": "Comprar",
                              "description": "Compra los mejores productos para tu hogar"
                          },
                          {
                              "id": "main-vender",
                              "title": "Vender",
                              "description": "Vende tus productos"
                          }
                      ]
                  },
                  {
                      "title": "📍Centro de atención",
                      "rows": [
                          {
                              "id": "main-agencia",
                              "title": "Agencia",
                              "description": "Puedes visitar nuestra agencia."
                          },
                          {
                              "id": "main-contacto",
                              "title": "Centro de contacto",
                              "description": "Te atenderá uno de nuestro agentes."
                          }
                      ]
                  }
              ]
          }
      }
  });
}

module.exports = {
  messageText,
  messageList
}