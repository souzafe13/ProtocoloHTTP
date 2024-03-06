var express = require('express');

const app = express();

// rota 1
app.get("/", function(req, res){
    res.send("boas vindas ao meu app!");
});

// rota 2
app.get("/sobre", function(req, res){
    res.send("sobre a minha empresa!");
});

// rota 3
app.get("/produtos", function(req, res){
    res.send("Confira os nossos produtos");
});

//rota com parâmetros
app.get("/ola/:nome/:cargo/:idade", function(req, res){
res.send("<h1>Ola " + req.params.nome + "</h1>" + 
"<br><h2> Seu cargo é: " + req.params.cargo + 
"<br> Sua idade é: " + req.params.idade + "</h2>"
);
});



//porta do protocolo http
app.listen(8081, function(){
console.log("servidor está rodando no endereço http://localhost:8081");   
}
);


