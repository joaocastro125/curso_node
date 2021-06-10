const mongoose=require('mongoose');
mongoose.Promise=global.Promise;

const postShema=new mongoose.Schema({
    title:{
       type: String,
       trim:true, // evita espaço desnessarios 
       required:'o campo precis de um titulo'
    },
    slug:String,
    body:{
        type:String,
        trim:true,

    },
    tags:[String]

})

module.exports=mongoose.model('Post',postShema)