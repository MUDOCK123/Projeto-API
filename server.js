const express = require('express');
const app = express();
const data = require("./data.json");

// VERBOS HTTP
// GET: Receber dados de um Resource.
// POST: Enviar dados ou informações para serem processadas por um Resource.
// PUT: Atualizar dados de um Resource.
// DELETE: Deletar um Resource.

// http://localhost:3000/clients => localhost:3000 é minha api, clients é meu Endpoint e Resource (Resource seria o cliente). 

app.use(express.json());

//Minha requisição (req) e minha resposta (res).
app.get("/clients", function(req, res) {
    res.json(data);
});

app.get("/clients/:id", function(req, res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    res.json(client);
});

app.post("/clients", function(req, res) {});
app.put("/clients/:id", function(req, res) {});
app.delete("/clients/:id", function(req, res) {});


app.listen(3000, function() {
    console.log('Server is running');
}); 