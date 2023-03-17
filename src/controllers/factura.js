const factura = {}
const bd = require('../database')



factura.crear= (req,res)=>{
    try{bd.facturacrear(req,res);}catch(e){ console.log(e);}}

 factura.buscarid= (req,res)=>{
            try{bd.buscarfactura(req,res);}catch(e){ console.log(e);}}


    module.exports= factura