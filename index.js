

const express = require("express");
const app = express();
const database = require("./db/db");
const hand = require("express-handlebars");

const FilmeRoutes = require("./routes/routesFilme");

app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({extended: true,}));
app.use(express.json());
app.use(express.static("public"));

app.use("/", FilmeRoutes);



try {
  database.sync().then(() => {});
  app.listen(9443, () => {
    console.log("Servidor rodando");
  });
} catch (erro) {
  console.log("Houve uma falha ao sincronizar com o banco de dados. ", erro);
}
