const mesero = {}
const bd = require('../database')



mesero.crear= (req,res)=>{
    try{bd.crearmesero(req,res);}catch(e){ console.log(e);}}

 mesero.borrarid= (req,res)=>{
        try{bd.borrarseguido(req,res);}catch(e){ console.log(e);}}

 mesero.buscarid= (req,res)=>{
            try{bd.buscarseguido(req,res);}catch(e){ console.log(e);}}








    module.exports= mesero
    