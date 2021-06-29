const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const dbURI =
  "mongodb+srv://dbUser:cs368-pass" +
  // process.env.DB_PASSWORD +
  "@cluster0.d3ocq.mongodb.net/CS368?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) => {
    console.log("connected to db");
  });

const Stats = require("./db/statistics");

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/tutorial", (req, res) => {
  res.redirect("/tutorial/1");
});
app.get("/tutorial/1", (req, res) => {
  res.sendFile(__dirname + "/views/tutorials/1/1.html");
});

// api
app.post("/api/updatePageView", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  Stats.findOne({ stat: "currentPageViews" }, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      Stats.findOneAndUpdate(
        { stat: "currentPageViews" },
        { views: docs.views + 1, stat: "currentPageViews" },
        (err, newdocs) => {
          if (err) {
            console.log(err);
          } else {
            res.send(newdocs);
          }
        }
      );
    }
  });
});
app.get("/api/getCurrentViews", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  Stats.findOne({ stat: "currentPageViews" }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        views: result.views,
      });
    }
  });
});

app.listen(process.env.PORT || 3000);
