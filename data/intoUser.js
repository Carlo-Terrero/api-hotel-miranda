const {faker} = require('@faker-js/faker');
//const res = require('express/lib/response');
//onst { use } = require('passport/lib');
const Contact = require('../models/contact');
const User = require('../models/user');
const Room = require('../models/rooms');
const Booking = require('../models/booking');
require('../connection/connectionDB');

/* const mongoConet = require('../connection/connectionDB')
mongoConet(); */
/* 
const ConectionDB = require('../DBConnections/mySQL_conection')
*/
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

const randamStatus = () => {
    return Math.floor(Math.random() *  (4))
}
/* name: {type: String, required: true},
mail: {type: String, required: true},
fhone: {type: Number, required: true},
asunto: {type: String, required: true},
mensaje */

async function  addPruebas(){

    for(let i = 0; i < 6; i++){
        //try {
            let persona = {
                name: faker.name.firstName(),
                mail: faker.internet.email(),
                fhone: faker.phone.phoneNumber('6########'),
                asunto:  faker.word.noun(),
                mensaje: faker.lorem.paragraph(1),
            }

            const newContact = new Contact(persona);
            const result = await newContact.save()

            console.log('Contact añadido', result)

       // } catch (err){
            //console.log(err)
       // }
    }
}

//addPruebas();

// Este fue una prueba
/* function prueba(){
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
} */
//prueba();

// insertamos User
async function insetUser(){

    let datos =[]
    for(let i = 0; i < 6; i++){
        try{
            const usuario = {
                name: faker.name.firstName() + ' ' + faker.name.findName(),
                email: faker.internet.email(),
                foto: faker.image.avatar(),
                description: faker.lorem.paragraph(1),
                contact: faker.phone.phoneNumber('6########'),
                password: faker.word.noun(),
                estado: faker.datatype.boolean(),
                puesto: Puesto(),
                start_date: dateFormat(faker.date.past()),
            }

            const newUser = new User(usuario);
            const result = await newUser.save();
            datos = [...datos, result]
        } catch(err){
            console.log('Error aqui ', err)
        }       
    }
    console.log(datos)
    
}
//insetUser()

async function insertarNumRooms(){

    let date =[];
    for(let i = 0 ; i < 3 ; i++ ){
        try{
            const room = {
                foto: 'http://www.mdvacationclub.com/wp-content/uploads/2018/12/Placeholder.png',
                bed_type: type(),
                number: i+1,// de la habitacion
                description: faker.lorem.paragraph(1),
                offer: faker.datatype.boolean(),
                price: faker.commerce.price(100, 200),
                discount: añadirDescuento(),
                cancellation: faker.lorem.paragraph(1),
                facilities: comodidades(),
            }

            const newRoom = new Room(room);
            const result = await newRoom.save();
            date = [...date, result]
        } catch(err) {
            console.log('El error aqui ',err)
        }
    }
    console.log(date)
}
//insertarNumRooms()

async function inserBooking(){

    let datos=[]
    for(let i = 0; i < 30; i++){
        try{
            const booking = {
                name:  faker.name.firstName() + ' ' + faker.name.findName(),
                order_date: dateFormat(faker.date.recent(60)),
                check_In: dateFormat(faker.date.recent(30)), 
                check_Out: dateFormat(faker.date.recent(15)),
                special_request: faker.lorem.paragraph(1),
                room_number: i+1,
                price: faker.commerce.price(100, 200),
                amenities: comodidades(),
                fotos: 'http://www.mdvacationclub.com/wp-content/uploads/2018/12/Placeholder.png',
                room_type:  type(),
                status: randamStatus(),
                description_room: faker.lorem.paragraph(1)
            }

            const newRoom = new Booking(booking);
            const result = await newRoom.save();
            datos = [...datos, result];

        }catch(err){
            console.log('El error esta aqui', err)
        }
    }
    console.log(datos)
}

//inserBooking();

/* const a = ConectionDB.query(`select Nombre, Email, contact from users where idUsers = 1`,
        function(error, results, fields){
            if(error) throw error;
            console.log('SUCCESS datos introducidos')
        }

    ) */

/* console.log(a) */

/* function dbQuery(query) {
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
 */

//Porque si hago un return del dato que ya me imprime bien me da Promise { <pending> }
/* const pp = async (req, res, next) => {
    const userResult = await dbQuery('SELECT * FROM users WHERE idUsers = 1');
    //console.log(userResult);
    return userResult;
}


let aa;
const ppp = async (req, res, next) => {
    const userResult = await dbQuery('SELECT * FROM users WHERE idUsers = 1');
    aa = userResult;
    console.log(userResult);
} */
//ppp()

//console.log(aa);

//const d = pp();
//console.log(d)
//-------------- monqueamos la BBDD de mongo ---------------
