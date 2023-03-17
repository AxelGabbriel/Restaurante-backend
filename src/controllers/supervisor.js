const supervisor = {}
const bd = require('../database')



supervisor.crear= (req,res)=>{
    try{bd.supervisorcrear(req,res);}catch(e){ console.log(e);}}

 supervisor.borrarid= (req,res)=>{
        try{bd.borrarsupervisor(req,res);}catch(e){ console.log(e);}}

 supervisor.buscaridsupervisor= (req,res)=>{
            try{bd.buscaridsupervisor(req,res);}catch(e){ console.log(e);}}








    module.exports= supervisor