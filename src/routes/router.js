const express = require('express')
const router = express.Router()
const usuario = require('../controllers/usuario')
const cliente= require('../controllers/cliente')
const mesero=require('../controllers/mesero')
const { passportAuth } = require('../middlewares')
const supervisor = require('../controllers/supervisor')
const mesa= require('../controllers/mesa')
const factura= require('../controllers/factura')
const detalle= require('../controllers/detalle')

//registro y login
router.post('/registro', usuario.register)
router.post('/login', passportAuth)
router.get('/perfil', (req, res) => {
    res.send('perfil')
})


//Manejo de archivos
/*const multer = require('multer')
const { uploadImage } = require('../controllers/uploadImage')

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true)
    } else {
        cb('invalid image file', false)
    }
}
const uploads = multer({ storage, fileFilter })

router.post('/upload', uploads.single('manga'), uploadImage)*/




//rutas para cliente
router.post('/crear-cliente',cliente.crear)
router.get('/buscar-cliente/:nombre',cliente.buscarnombrecliente)
router.get('/clientes',cliente.mostrarclientes)
router.delete('/borrar-cliente/:id_cliente',cliente.borrarcliente)

//rutas para mesero
router.post('/crear-mesero',mesero.crear)
router.get('/buscar-mesero/:id_mesero',mesero.buscarid)
router.delete('/borrar-mesero/:id_mesero',mesero.borrarid)


//rutas para supervisor
router.post('/crear-supervisor',supervisor.crear)
router.get('/buscar-supervisor/:id_supervisor',supervisor.buscarid)
router.delete('/borrar-supervisor/:id_supervisor',supervisor.borrarid)

//rutas para mesa
router.post('/crear-mesa',mesa.crear)
router.get('/buscar-mesa/:id_mesa',mesa.buscarid)
router.delete('/borrar-mesa/:id_mesa',mesa.borrarid)

//factura
router.post('/factura-crear',factura.crear)
router.get('/factura-buscar/:id_factura',factura.buscarid)

//detallefactura
router.post('/detalle-crear',detalle.crear)
router.post('/detalle-buscar/:id_detallefactura',detalle.buscarid)


module.exports = router