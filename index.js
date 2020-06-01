const express = require('express'); /*Importando a dependencia express */
const app = express(); 

app.set('view engine' , 'ejs'); /* Inicia o EJS na aplicação*/
app.use(express.static('public'));/* pega o que está na pasta publica */ 

app.get('/',(request, response)=>{
    response.render('home',{});
});

app.listen(3000,(err)=>{
    if(err){
        console.log('Não foi possivel iniciar o servidor');
        
    }
    console.log('Servidor iniciado...');
    
});