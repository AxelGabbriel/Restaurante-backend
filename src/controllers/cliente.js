const cliente = {}
const bd = require('../database')



cliente.crear = (req, res) => {
       try { bd.crearcliente(req, res); } catch (e) { console.log(e); }
}

cliente.buscarnombrecliente = (req, res) => {
       try { bd.buscaridcliente(req, res); } catch (e) { console.log(e); }
}

cliente.borrarcliente = (req, res) => {
       try { bd.borrarcliente(req, res); } catch (e) { console.log(e); }
}
 
cliente.mostrarclientes = (req, res) => {
       try { bd.todosclientes(req, res); } catch (e) { console.log(e); }
}





module.exports = cliente