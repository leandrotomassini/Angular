const { response } = require("express");
const bcrypt = require('bcryptjs');

const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response) => {

    const { email, name, password } = req.body;

    try {
        // Verificar si no existe un usuario igual
        const usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe con ese email.'
            });
        }

        // Crear modelo del usuario
        const dbUser = new Usuario(req.body);

        // Hashear la constraseña
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt);

        // Generar el JWT
        const token = await generarJWT(dbUser.id, name);


        // Crear usuario en la DB
        await dbUser.save();

        // Generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
            email,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador.'
        });

    }
};

const login = async (req, res) => {

    const { email, password } = req.body;

    try {

        const dbUser = await Usuario.findOne({ email });

        if (!dbUser) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe.'
            });
        }

        // Confirmar si el password hace match
        const validPassword = bcrypt.compareSync(password, dbUser.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'El password no es válido.'
            });
        }

        // Generar el JWT
        const token = await generarJWT(dbUser.id, dbUser.name);

        // Respuesta del servicio
        return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            email,
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador.'
        })
    }
}

const renovarToken = async (req, res = response) => {

    const { uid } = req;

    // Leer la base de datos
    const dbUser = await Usuario.findById(uid);

    

    // Generar el JWT
    const token = await generarJWT(uid, dbUser.name);

    return res.json({
        ok: true,
        uid,
        name: dbUser.name,
        email: dbUser.email,
        token
    });
};

module.exports = {
    crearUsuario,
    login,
    renovarToken
}

