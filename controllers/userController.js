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

    //Borramos un elemento
    user_delete: async (req, res) => {
        const userResult = await dbQuery(`DELETE FROM users WHERE idUsers = ${parseInt(req.params.id)}`)
        //return res.json({Response: `Eliminamos el user con el id ${req.params.id} desde controladores`})
        return res.json({Response: `El elemento ${req.params.id} fue borrado`})
    },

    //actualizar
    user_put: async (req, res) => {

        const userResult = await dbQuery( 
            `UPDATE users SET 
                Nombre="${req.body['Nombre']}",
                Email="${req.body['Email']}",
                foto="${req.body['foto']}",
                Description="${req.body['Description']}",
                Contact="${req.body['Contact']}",
                Password="${req.body['Password']}",
                estado="${req.body['estado']}",
                Start_Date="${req.body['Start_Date']}",
                Puesto="${req.body['Puesto']}"
                WHERE idUsers = ${parseInt(req.params.id)}`
        )

        //return res.json({Response: `Actualizamos el user con el id ${req.params.id} desde controladores ${datos}`})
        return res.json({Resposne: `Elemento ${req.params.id} actualizado`})
    }
}