const detalle= {}
const bd = require('../database')



detalle.crear= (req,res)=>{
    try{bd.detallecrear(req,res);}catch(e){ console.log(e);}}

 detalle.buscarid= (req,res)=>{
            try{bd.buscardetalle(req,res);}catch(e){ console.log(e);}}


    module.exports= detalle