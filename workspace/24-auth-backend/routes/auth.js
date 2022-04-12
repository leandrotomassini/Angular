const { Router } = require('express');
const { check } = require('express-validator');

const { crearUsuario, renovarToken, login } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

// Crear un nuevo usuario
router.post('/new', [
    check('name', "El nombre es obligatorio").not().isEmpty(),
    check('email', "El email es obligatorio").isEmail(),
    check('password', "La contraseña es obligatoria y debe tener como mínimo 6 caracteres.").isLength({ min: 6 }),
    validarCampos
], crearUsuario);

router.post('/', [
    check('email', "El email es obligatorio").isEmail(),
    check('password', "La contraseña es obligatoria.").isLength({ min: 6 }),
    validarCampos
], login);

// Validar y revalidar token
router.get('/renew', validarJWT, renovarToken);


module.exports = router;