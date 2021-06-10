
//importando
const express=require('express');

const index=require('./router/index');
const mustache=require('mustache-express');
const helpers=require('./helpers');
const errorHandlers=require('./handlers/errorHandlers')

//chamada da funcão express
const app=express();  
app.use((req,res,next)=>{  // esse metodo serve para ir para proxima pagina e tem que ser antes da rotas 
    res.locals.h=helpers;
   
    next();    
}) 
//rotas       

app.use(express.json())//esse é a versão mais nova que ante usavao body parser
// rotas
app.use(express.urlencoded({extended:true}));
app.engine('mst',mustache(__dirname+'/views/partials','.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');
// usando a rota  exportada   

app.use("/",index)

app.use(errorHandlers.errorDefaults)
    

// exportando          

module.exports=app;


