const { Pool } = require('pg');
const helpers = require('./helpers')
const config = {

  user: 'postgre',
  host: 'localhost',
  database: 'restaurante',
  password: 'axel',
  port: 5432,

};

const pool = new Pool(config);

//funcion de crear usuario para registro
const crearusuario = async (req, res) => {

  const {
    username,
    correo,
    nombre,
    contraseña,
    verificarclave
  } = req.body;

  if (contraseña === verificarclave) {

    const passwordencriptado = await helpers.encryptPassword(contraseña)
    const result = await pool.query('INSERT INTO usuario(username,correo,nombre,contraseña) VALUES($1,$2,$3,$4)', [
      username, correo, nombre, passwordencriptado])
    console.log(result)
    res.json(result.rows)

  } else {
    res.json('contraseñas no compatibles')
  }
}


const crearcliente = async (req, res) => {

  const {
    nombre,
    apellido,
    direccion,
    telefono
  } = req.body;

  const result = await pool.query('INSERT INTO cliente(nombre,apellido,direccion,telefono) VALUES($1,$2,$3,$4)', [
    nombre,apellido,direccion,telefono])
  console.log(result)
  res.json(result.rows)
}

const buscarnombrecliente = async (req, res) => {
  const nombre = req.params.nombre
  const response = await pool.query('SELECT* FROM cliente WHERE  nombre=$1', [nombre])
  console.log(response);
  res.json(response.rows)
}

const borrarcliente = async (req, res) => {
  const id_cliente = req.params.id_cliente
  const response = await pool.query('DELETE FROM cliente WHERE id_cliente=$1', [id_cliente])
  console.log(response);
  res.json(response.rows)

}



const todosclientes = async (req, res) => {
  const response = await pool.query('select * from cliente')
  console.log(response);
  res.json(response.rows)
}

const crearmesero= async (req, res) => {

  const {
    nombre,
    apellido,
    edad,
    antiguedad
    
  } = req.body;

  const result = await pool.query('INSERT INTO mesero(nombre,apellido,edad,antiguedad) VALUES($1,$2,$3,$4)', [
    nombre,apellido,edad,antiguedad])
  console.log(result)
  res.json(result.rows)


}

const buscaridmesero = async (req, res) => {
  const id_mesero = req.params.id_mesero
  const response = await pool.query('SELECT* FROM mesero WHERE  id_mesero=$1', [id_mesero])
  console.log(response);
  res.json(response.rows)
}

const borrarmesero = async (req, res) => {
  const id_mesero = req.params.id_mesero
  const response = await pool.query('DELETE FROM mesero WHERE  id_mesero=$1', [id_mesero])
  console.log(response);
  res.json(response.rows)
}

const supervisorcrear = async (req, res) => {
  const{
    nombre,
    apellido,
    edad,
    antiguedad
  }=req.body;
  const response = await pool.query('INSERT INTO supervisor(nombre,apellido,edad,antiguedad) VALUES($1,$2,$3,$4)', [nombre,apellido,edad,antiguedad])
  console.log(response);
  res.json(response.rows)
}

const buscaridsupervisor = async (req, res) => {
  const id_supervisor = req.params.id_supervisor
  const response = await pool.query('SELECT* FROM supervisor WHERE  id_supervisor=$1', [id_supervisor])
  console.log(response);
  res.json(response.rows)
}
const borrarsupervisor = async (req, res) => {
  const id_supervisor = req.params.id_supervisor
  const response = await pool.query('DELETE FROM supervisor WHERE  id_supervisor=$1', [id_supervisor])
  console.log(response);
  res.json(response.rows)
}

const mesacrear = async (req, res) => {
  const{
    numero_mesa,
    reservada,
    puestos
  }=req.body;
  const response = await pool.query('INSERT INTO mesa(numero_mesa,reservada,puestos) VALUES($1,$2,$3)', [numero_mesa,reservada,puestos])
  console.log(response);
  res.json(response.rows)
}


const borrarmesa = async (req, res) => {
  const id_mesa = req.params.id_mesa
  const response = await pool.query('DELETE FROM mesa WHERE  id_mesa=$1', [id_mesa])
  console.log(response);
  res.json(response.rows)
}

const buscaridmesa = async (req, res) => {
  const id_mesa = req.params.id_mesa
  const response = await pool.query('SELECT* FROM mesa WHERE  id_mesa=$1', [id_mesa])
  console.log(response);
  res.json(response.rows)
}

const facturacrear = async (req, res) => {
  const{
    id_cliente,
    numero_mesa,
    id_mesero,
    fecha
  }=req.body;
  const response = await pool.query('INSERT INTO factura(id_cliente,numero_mesa,id_mesero,fecha) VALUES($1,$2,$3,$4)', [
    id_cliente,numero_mesa,id_mesero,fecha
  ])
  console.log(response);
  res.json(response.rows)
}
const buscarfactura = async (req, res) => {
  const id_factura = req.params.id_factura
  const response = await pool.query('SELECT* FROM factura WHERE  id_factura=$1', [id_factura])
  console.log(response);
  res.json(response.rows)
}

const detallecrear = async (req, res) => {
  const{
    id_detallefactura,
    id_supervisor,
    plato,
    precio
  }=req.body;
  const response = await pool.query('INSERT INTO detallefactura(id_detallefactura,id_supervisor,plato,precio) VALUES($1,$2,$3,$4)', [
    id_detallefactura,id_supervisor,plato,precio
  ])
  console.log(response);
  res.json(response.rows)
}

const buscardetalle = async (req, res) => {
  const id_detallefactura = req.params.id_detallefactura
  const response = await pool.query('SELECT* FROM detallefactura WHERE  id_detallefactura=$1', [id_detallefactura])
  console.log(response);
  res.json(response.rows)
}

module.exports = {
  crearusuario, borrarmesa,buscaridmesa,buscardetalle,
   crearcliente,facturacrear,buscarfactura,detallecrear,
  buscarnombrecliente, borrarcliente, crearmesero, 
  todosclientes, buscaridmesero,borrarmesero,supervisorcrear,buscaridsupervisor,borrarsupervisor,mesacrear

}