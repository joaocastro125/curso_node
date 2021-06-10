
const mongoose=require('mongoose');
require('dotenv').config({path:'variablues.env'})
// setando a porta - app.set('port',7777);
mongoose.connect(process.env.DATABASE,{useNewUrlParser: true,useUnifiedTopology: true});
// NESSA PARTE PODEMOS ACESSAR O PROMISSE E O AYCN AWAIT DO ES6
mongoose.Promise=global.Promise;
mongoose.connection.on('error',(error)=>{
    console.error('ERROR'+error.message)
});
require('../models/Post');
const app=require('../app');
app.set('port',process.env.PORT|| 7777);


const server=app.listen(app.get('port'),()=>{
    console.log("rodando na porta "+server.address().port)// passando o const server mostando o endereço e aporta 
})

