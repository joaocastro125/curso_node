criando um projeto node  

criação do pacote package.json

## npm  init -y 

gerenciamento de dependencia de requisições , rotas, URLS

## npm install express --save 

geriaciador de servidor para cada alteração atualizar o servidor automaticamente 
## npm install nodemon 

entrar no site do mongo de baixar o ele 

criamos um arquivo para fazer a variavel de ambiente

instalar um dependencia que ajuda na variavel de ambiente 

## npm install dotenv
configuração do dotenv 
require('dotenv').config({path:'arquivo.env'})

- para passar quaquer arquivo do  env precimos usar o comandos raiz do node 'port',process.env.PORT

- instando uma dependencia para manipulação do mongo 

## npm install mongoose 

configuração do mongoose 
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});
mongoose.Promise=global.Promise;

TESTANDO O ERRO 

mongoose.connection.on('error',(error)=>{
    console.error('ERROR'+error.message)
})

crie uma pasta chamada router 


instalando um templates para usar o html 

## npm install  mustache--express

criamos uma pasta views para ter acesso view engine é o motor de renderização do html 


instalando o  templates helpers server quando precismos passar uma informações padrao  que nao colocamos na parte principal 

## npm install helpers




explicações de middware -> fica no meio 

ex de middware  

login 

- requisicao 
## valida campo 
## autoriza usuario
-resposta 
## postitiva
## nagativa 

existe dois tipos de middware 

- global fica no codigo todo 
- e local onde fica um lugar especifico 








