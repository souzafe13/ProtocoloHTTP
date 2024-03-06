var express = require('express');

const app = express();

// rota chamando o html
app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

// rota chamando o html
app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
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


