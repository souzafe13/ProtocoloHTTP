var express = require('express');

const app = express();

// rota 1
app.get("/", function(req, res){
    res.send("boas vindas!");
});
// rota 2
app.get("/sobre", function(req, res){
    res.send("sobre a minha empresa!");
});
// rota 3
app.get("/produtos", function(req, res){
    res.send("Confira os nossos produtos");
});
//porta do protocolo http
app.listen(8081, function(){
console.log("servidor está rodando no endereço http://localhost:8081");   
}
);


