const mesa = {}
const bd = require('../database')



mesa.crear= (req,res)=>{
    try{bd.mesacrear(req,res);}catch(e){ console.log(e);}}

 mesa.borrarid= (req,res)=>{
        try{bd.borrarmesa(req,res);}catch(e){ console.log(e);}}

 mesa.buscarid= (req,res)=>{
            try{bd.buscaridmesa(req,res);}catch(e){ console.log(e);}}


    module.exports= mesa