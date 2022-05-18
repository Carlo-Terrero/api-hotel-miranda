const {faker} = require('@faker-js/faker');
const res = require('express/lib/response');
const { use } = require('passport/lib');

const ConectionDB = require('../DBConnections/mySQL_conection')

const Puesto = () => {
    let puesto=[
        'Manager',
        'Recepción',
        'Servicio de Habitaciones'
    ]
    return puesto[Math.floor(Math.random() * 3)]
}

const dateFormat = (date) => {
    const dateParse =  date.toLocaleDateString("fr-CA", { 
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })
    return dateParse;
}

const type = () => {
    let options=[
        'Single Bed',
        'Double Bed',
        'Double Superios',
        'Suite'
    ]
    return options[Math.floor(Math.random() * 4)]
}

const comodidades = () => {
    const comodidadesTotal = [
        'Tv',
        'Wifi',
        'Air Conditioner',
        'Mosquiteras',
        'Pet Friendly',
        'Hidro-Massage',
        'Service Room'
    ]
    return comodidadesTotal[Math.floor(Math.random() * 4)]
}

const añadirDescuento = () => {
    return Math.floor(Math.random() *  (51 - 10)) + 10
}

const añadirIdRoom = () => {
    return Math.floor(Math.random() *  (39 - 1)) + 1
}

const randamStatus = () => {
    return Math.floor(Math.random() *  (4))
}

// Este fue una prueba
function prueba(){
    for(let i = 0; i < 3; i++){
        const puesto = Puesto();
        const name =  faker.name.firstName() + ' ' + faker.name.findName();

        ConectionDB.query(
            `INSERT INTO prueba (name, dir)
            VALUES ("${name}","${puesto}")`,
        function(error, results, fields){
            if(error) throw error;
            console.log('SUCCESS datos introducidos')
        }
        )

    }
}
//prueba();

// insertamos User
function insetUser(){
    for(let i = 0; i < 10; i++){

        const name =  faker.name.firstName() + ' ' + faker.name.findName();
        const email = faker.internet.email();
        const foto = faker.image.avatar();
        const description = faker.lorem.paragraph(1);
        const contact = faker.phone.phoneNumber('6########');
        const password = faker.word.noun();
        const estado = faker.datatype.boolean();
        const puesto = Puesto();
        const start_date = dateFormat(faker.date.past());

        ConectionDB.query(
            `INSERT INTO users (Nombre, Email, foto, Description, Contact, Password, estado, Start_Date, Puesto)
            VALUES ("${name}", "${email}", "${foto}", "${description}", "${contact}", "${password}", "${estado}", "${start_date}", "${puesto}")`,
            function(error, results, fields){
                if(error) throw error;
                console.log('SUCCESS datos introducidos')
            }
        )

    }
}
//insetUser()


function insertarNumRooms(){

    for(let i = 0 ; i < 30 ; i++ ){
        const foto = 'http://www.mdvacationclub.com/wp-content/uploads/2018/12/Placeholder.png';
        const bed_type = type();
        const number = i+1// de la habitacion
        const description = faker.lorem.paragraph(1);
        const offer = faker.datatype.boolean();
        const price = faker.commerce.price(100, 200);
        const discount = añadirDescuento();
        const cancellation = faker.lorem.paragraph(1);
        const facilities = comodidades();

        ConectionDB.query(
            `INSERT INTO rooms (foto, bed_type, number, description, Offer, price, discount, cancellation, facilities)
            values ("${foto}", "${bed_type}", "${number}", "${description}", "${offer}", "${price}", "${discount}", "${cancellation}", "${facilities}")`,
            function(error, results, fields){
                if(error) throw error;
                console.log('SUCCESS datos introducidos')
            }
        )
    }
}
//insertarNumRooms()

function inserBooking(){

    for(let i = 0; i < 80; i++){
        const name =  faker.name.firstName() + ' ' + faker.name.findName();
        const order_date = dateFormat(faker.date.recent(60));
        const check_In = dateFormat(faker.date.recent(30)); 
        const check_Out = dateFormat(faker.date.recent(15));
        const special_request = faker.lorem.paragraph(1);;
        const status = randamStatus();
        const fk_bookingRooms = añadirIdRoom();

        ConectionDB.query(
            `INSERT INTO bookings (nombre, order_date, check_In, check_Out, special_request, status, fk_bookingRooms)
            VALUES ("${name}", "${order_date}", "${check_In}", "${check_Out}", "${special_request}", "${status}", "${fk_bookingRooms}")`,
            function(error, results, fields){
                if(error) throw error;
                console.log('SUCCESS datos introducidos')
            }
        )
    }
    
}

//inserBooking();

/* const a = ConectionDB.query(`select Nombre, Email, contact from users where idUsers = 1`,
        function(error, results, fields){
            if(error) throw error;
            console.log('SUCCESS datos introducidos')
        }

    ) */

/* console.log(a) */

function dbQuery(query) {
    return new Promise((resolve, reject) => {
        ConectionDB.query(query,
            (error, result, fields) => {
                if(error) reject(error);
                resolve(result);
            }
        );
    });
}

const p = async (req, res, next) => {
    const userResult = await dbQuery('SELECT * FROM users');
    console.log(userResult);
}


//Porque si hago un return del dato que ya me imprime bien me da Promise { <pending> }
const pp = async (req, res, next) => {
    const userResult = await dbQuery('SELECT * FROM users WHERE idUsers = 1');
    //console.log(userResult);
    return userResult;
}


let aa;
const ppp = async (req, res, next) => {
    const userResult = await dbQuery('SELECT * FROM users WHERE idUsers = 1');
    aa = userResult;
    console.log(userResult);
}
ppp()

console.log(aa);

//const d = pp();
//console.log(d)