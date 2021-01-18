require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const session = require("express-session");
const session_secret = "newton";
const SALT = 5;

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose Connection ERROR: ${err.message}`);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!!");
});

//Models
require("./models/User");
require("./models/Details");
const User = mongoose.model("User");
const Details = mongoose.model("Details");

const app = require("./app");
app.use(
  session({
    secret: session_secret,
  })
);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

app.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    res.status(401).send("Error");
  }
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(400).send({ err: `Email ${email} already exists` });
  } else {
    const encryptedPassword = bcrypt.hashSync(password, SALT);
    const newUser = new User({
      username,
      password: encryptedPassword,
      email,
    });
    await newUser.save();
    req.session.userId = newUser._id;
    res.status(201).send("Successfully signed up");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401).send("Error");
  }
  const existingUser = await User.findOne({
    username,
  });

  if (existingUser) {
    encryptedPassword = existingUser.password;
    if (bcrypt.compareSync(password, encryptedPassword)) {
      req.session.userId = existingUser._id;
      res.status(201).send("Successfully logged in");
    } else {
      res.status(401).send({ err: "password does not match" });
    }
  } else {
    res.status(401).send({ err: "Email does not match" });
  }
});


app.get("/logout", (req, res)=> {
  if(!isNullOrUndefined(req.session)) {
      // destroy the session
      req.session.destroy(() => {
          res.sendStatus(200);
      });

  } else {
      res.sendStatus(200);
  }
});

app.post("/Booking",async(req,res)=>{
  const {name,age,phoneNumber,licence,noOfTravellers,fromDate,toDate}=req.body;
  if(!name || !age || !phoneNumber || !licence || !noOfTravellers || !fromDate ||!toDate){
    res.status(401).send("Error");
  }
  else{
    const newUserDetails = new Details({
      name,
      age,
      phoneNumber,
      licence,
      noOfTravellers,
      fromDate,
      toDate,
    });
    await newUserDetails.save();
    res.status(201).send("Your Trip Booked Successfully");
  }
})