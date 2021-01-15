require("dotenv").config();
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
const User = mongoose.model("User");

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