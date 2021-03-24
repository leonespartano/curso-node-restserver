const { response, request } = require('express');

const usuariosGet = (req= request, res = response) => {

    const { q, page, limit = 'no name', apikey} = req.query;

    res.json({
        msg: 'get Api - controlador',
        q,
        page,
        limit
    });
}

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;


    res.json({
        msg: 'post Api',
        nombre,
        edad
    })
};

const usuariosPut = (req, res) => {
    const {id} = req.params;

    res.json({
        msg: 'put Api - controller',
        id
    })
};

const usuariosDelete = (req, res) => {
    res.json({
        ok:true,
        msg: 'delete Api - controller'
    })
};



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
};