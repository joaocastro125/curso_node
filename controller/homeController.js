// no controler ele que organiza tudo 

// exemplos de middware
 
exports.userMiddware=(req,res,next)=>{
    let info={name:'joao',id:123}
    //add na requisção manda a variavel criada 
    req.userInfo=info;  
    next(); 
}


exports.index=(req,res)=>{
    //let nome=req.query.nome
    //let idade=req.query.idade

     
    
    let obj={
        // nesse caso estamos reaproveitando as informacoes
    
  
     titlepage:'titulo de teste',
     userInfo:req.userInfo, 
   
       nome:'joao',
     idade:33,     
     mostar:'informação',
     incredientes:[
         {'nome':'arroz',qt:'5kg'}, 
         {'nome':'feijao',qt:'2kg'} 
         
     ],
     interesse:['node','js','php'], 
     // teste:'<strong>testando negrito</strong>'
 } 

     res.render('home',obj);  
 
 }; 