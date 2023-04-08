const VerifyToken = (req, res ) => {
  res.send("VerifyToken")
}


const ReceivedMessage = (req, res ) => {
  res.send("ReceivedMessage");
}

module.exports = {
  VerifyToken,
  ReceivedMessage
}