/* const ConectionDB = require('./mySQL_conection');

function dbQuery(query) {
    return new Promise((resolve, reject) => {
        ConectionDB.query(query,
            (error, result, fields) => {
                if(error) reject(error);
                resolve(result);
            }
        )
    })
}

module.exports = dbQuery; */