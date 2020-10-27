const express = require("express");
const hbs = require("express-handlebars");
const app = express();

app.engine("hbs", hbs({ defaultLayout: "default.hbs" }));
app.set("view engine", "hbs");

const PORT =
  parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000;

app.use(express.static(__dirname + "/static"));

app.get("/roll", (req, res) => {
  const diceNum = [1, 2, 3, 4, 5, 6];
  const imgPath = [
    "/images/dado-1.png",
    "/images/roll2.png",
    "/images/three_dots.png",
    "/images/four.png",
    "/images/Five-Image.png",
    "/images/dice-showing-6.png",
  ];

  const firstRandom = diceNum[Math.floor(Math.random() * diceNum.length)];
  const secondRandom = diceNum[Math.floor(Math.random() * diceNum.length)];
  res.status(200);
  res.type("text/html");
  res.render("dice", {
    randomNumOne: firstRandom,
    randomNumTwo: secondRandom,
    imgNumOne: imgPath[firstRandom - 1],
    imgNumTwo: imgPath[secondRandom - 1],
  });
});

app.use((req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Hello ${PORT} has started`);
});
