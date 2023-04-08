const express = require('express')

const router = express.Router();
const whatsappController = require("../controllers/whatsapp.controller");

router
  .get("/", whatsappController.VerifyToken)
  .post("/", whatsappController.ReceivedMessage);

module.exports = router;