function messageText(textResponse, number) {
  return JSON.stringify({
    "messaging_product": "whatsapp",    
    "recipient_type": "individual",
    "to": number,
    "type": "text",
    "text": {
        "preview_url": true,
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

function messageButton(number) {
  return JSON.stringify({
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: number,
    type: "interactive",
    interactive: {
			type: "button",
			body: {
				text: "Selecciona uno de los productos"
			},
			"action": {
				"buttons": [
					{
						"type": "reply",
						"reply": {
							"id": "prod-001",
							"title": "Laptop"
						}
					},
					{
						"type": "reply",
						"reply": {
							"id": "prod-002",
							"title": "Computadora"
						}
					}
				]
   		}
    }
  });
}

function messageLocation(number)  {
	return JSON.stringify({
		messaging_product: "whatsapp",
		recipient_type: "individual",
		to: number,
		context: {
			"message_id": "<MSGID_OF_PREV_MSG>"
		},
		type: "location",
		location: {
			latitude: "25.682377037065898",
			longitude: "-100.27760703386893",
			name: "Tortas Estilo Mexico",
			address: "Av. Cristóbal Colón 3702, Agrícola Acero, Monterrey, N.L."
		}
	})
}

module.exports = {
  messageText,
  messageList,
  messageButton,
	messageLocation
}