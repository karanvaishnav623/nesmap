require("dotenv").config();        // used to not disclode the info about port, password and other.
const express = require("express");
const app = express();                          // express object
const userRouter = require("./api/users/user.router");   

app.use(express.json());                 // message in json format 

app.use("/api/users", userRouter);           
const port = process.env.APP_PORT || 4000;     // APP_port defined in .env
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
