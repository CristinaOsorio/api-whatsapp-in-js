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
  res.send("ReceivedMessage");
}

module.exports = {
  VerifyToken,
  ReceivedMessage
}