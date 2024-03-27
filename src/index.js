const express = require("express");
const apiRoute = require("./routes/routes");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  const htmlResponse =`
    <html>
      <head>
        <title>Project</title>
      </head>
      <body>
        <h1>Welcome</h1>
      </body>
    </html>
  `;

  res.send(htmlResponse);
});

app.use("/whatsapp", apiRoute);

app.listen(PORT, () => console.log(`El puerto es: ${PORT}`))