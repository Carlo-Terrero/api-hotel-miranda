// var Author = require('../models/author'); Este seria el modelo de la tabla de la bbdd
//var user = require('../data/user')

const dbQuery = require('../DBConnections/queryFunction');

module.exports = {
    user_get: async (req, res, next) =>{
        const userResult = await dbQuery(`SELECT * FROM users`);
        //res.send(`Obtenemos todos los users desde controlles ${JSON.stringify (user)}`);
        return res.json({ data: 'datos', result: userResult});
    },

    user_getOne: async (req, res, next) => {
        const userResult = await dbQuery(`SELECT * FROM users WHERE idUsers = ${parseInt(req.params.id)}`)
        return res.json({user: userResult[0]})
    },

    //Agregamos users
    user_post: async (req, res) => {
        let {Nombre, Email, foto, Description, Contact, Password, estado, Start_Date, Puesto} = req.body;

        const userResult = await dbQuery(
            `INSERT INTO users (Nombre, Email, foto, Description, Contact, Password, estado, Start_Date, Puesto)
            VALUES ("${Nombre}", "${Email}", "${foto}", "${Description}", "${Contact}", "${Password}", "${estado}", "${Start_Date}", "${Puesto}")`
        );
        
        //return res.json({Response: `Agregamos un user nuevo desde controladores con los datos ${Nombre} ${Email} ${foto} ${Description} ${Contact} ${Password} ${estado} ${Start_Date} ${Puesto}`});
        return res.json({Response: 'Nuevo usuario añadido'})
    },

    user_delete: (req, res) => {
        return res.json({Response: `Eliminamos el user con el id ${req.params.id} desde controladores`})
    },

    //actualizar
    user_put: (req, res) => {
        return res.json({Response: `Actualizamos el user con el id ${req.params.id} desde controladores`})
    }
}