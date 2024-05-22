const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const cors = require("cors");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.json())
app.use(cors());

const DB_URL =
  "mongodb+srv://qasanovsako9:azmp101@cluster0.jw3sehx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const CourseSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },  
  imageUrl: { type: String, required: true },
});

const CourseModel = mongoose.model("Course", CourseSchema);

app.get("/products", async (req, res) => {
  try {
    const products = await CourseModel.find({});
    if (products) {
      res.status(200).send({ message: "success", data: products });
    } else {
      res.status(204).send({ message: "Not Found Data" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await CourseModel.findById(id);
    if (product) {
      res.status(200).send({ message: "success", data: product });
    } else {
      res.status(204).send({ message: "Not Found Data", data: product });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const course = await CourseModel.findByIdAndDelete(id);
    if (course) {
      res.status(200).send({ message: "success", data: course });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.post("/products", async (req, res) => {
  try {
    const newProducts = new CourseModel({ ...req.body });
    await newProducts.save();
    res.status(201).send({ message: "Created Successfully" , data: newProducts});
  } catch (error) {
    console.log(error);
  }
});

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`Link:http://localhost:${port}`);
  });
});
