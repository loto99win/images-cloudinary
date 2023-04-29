const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const port = process.env.PORT || 8080;

// Connect DB
mongoose
  .connect('mongodb+srv://phamhongbinh:phbNDTDT012@cluster0.qas9e46.mongodb.net/images?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:4200']
}));

// Route
app.use("/user", require("./routes/user"));

app.listen(port, () => console.log(`http://localhost:${port}/`));
