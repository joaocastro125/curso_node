const express=require('express');
const homeController=require('../controller/homeController')
const controllerUsers=require('../controller/controllerUsers');
const postController=require('../controller/postController');

const router=express.Router()  

// nas rotas temos alguns tipos 
   
/*
    get-> consulta
    post-> criação
    put->alteração
    delete-> excluir 
    path -> alteração especifica  

    requisições 
    query-> para o get   
    body -> para o post 
    params-> para urls
    para usar o json precisamos parar o app.use(express.json())
*/

router.get("/",homeController.userMiddware,homeController.index); 
router.get("/users/login",controllerUsers.login);
router.get("/post/add",postController.add); 
router.post("/post/add",postController.addAction);  
router.get("/posts/:id",(req,res)=>{
    res.send("numeros de posts: "+req.params.id);   
 
});

router.get("/sobre",(req,res)=>{
    res.send("página sobre");

});

module.exports=router;
