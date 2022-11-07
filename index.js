const express = require("express");
const app = express();
const port = process.env.port || 8080;



// secure the direct call to the application


// XSUAA Middleware

app.get("/", checkReadScope, (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example node app listening on port ${port}`);
});
