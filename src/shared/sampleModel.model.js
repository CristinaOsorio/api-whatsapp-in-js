function sendText(textResponse, number) {
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

function sendImage(number) {
  return JSON.stringify({
    "messaging_product": "whatsapp",    
    "recipient_type": "individual",
    "to": number,
    "type": "image",
    "image": {
      "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/image_whatsapp.png"
    }
  });
}

function sendAudio(number) {
  return JSON.stringify({
    "messaging_product": "whatsapp",    
    "recipient_type": "individual",
    "to": number,
    "type": "audio",
    "audio": {
        "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
    }
  });
}

function sendVideo(number) {
  return JSON.stringify({
    "messaging_product": "whatsapp",    
    "recipient_type": "individual",
    "to": number,
    "type": "video",
    "video": {
        "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4"
    }
  });
}

function sendDocument(number) {
  return JSON.stringify({
    "messaging_product": "whatsapp",    
    "recipient_type": "individual",
    "to": number,
    "type": "document",
    "document": {
      "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf",
      "filename": "Documento 2.1"
    }
  });
  
}

function sendLocation(number)  {
  return JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    context: {
        "message_id": "<MSGID_OF_PREV_MSG>"
    },
    "type": "location",
    "location": {
        "latitude": "25.682377037065898",
        "longitude": "-100.27760703386893",
        "name": "Tortas Estilo Mexico",
        "address": "Av. Cristóbal Colón 3702, Agrícola Acero, Monterrey, N.L."
    }
})
}

function sendButton(number) {
  return JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    type: "interactive",
    interactive: {
      type: "button",
      header: {
        type: "text",
        text: "Confirmacion del clima"
      },
      body: {
        text: "¿Esta lloviendo?"
      },
      "action": {
        "buttons": [
          {
              "type": "reply",
              "reply": {
                "id": "btn-001",
                "title": "✅ Si"
              }
            },
          {
            "type": "reply",
            "reply": {
                "id": "btn-002",
                "title": "❎No"
            }
          }
        ]
      }
    }
  });
}

function sendList(number){
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
  sendText,
  sendImage,
  sendAudio,
  sendVideo,
  sendDocument,
  sendLocation,
  sendButton,
  sendList,
}