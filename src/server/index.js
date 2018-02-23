const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const auth_controller = require('./controllers/auth_controller')
const massive = require('massive'); 
const cors = require('cors'); 
const ctrl = require('./controllers/ctrl')
require('dotenv').config();

//MIDDLEWARE
const checkForSession = require ('./middlewares/checkForSessions')

//CONTROLLERS



const app = express();

app.use(cors())
app.use( bodyParser.json() );
app.use( session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use( checkForSession );
app.use( express.static( `${__dirname}/build` ) );

//AUTH
app.post( '/api/login', auth_controller.login );
app.post( '/api/register', auth_controller.register );
// app.post( '/api/signout', auth_controller.signout );
// app.get( '/api/user', auth_controller.getUser );
app.post('/api/insert', ctrl.insert)
app.get('/api/getAll',ctrl.getAll)

const port = 3030;


massive('postgres://dtmkrvifvpmzym:8618c677b8f3d5265b98a0e1da944557bf91b0b2aa7a18bda84fcf0f5cc01fbf@ec2-54-163-234-99.compute-1.amazonaws.com:5432/dbeb3g6vs5p164?ssl=true'

).then(db=>
    {app.set('db',db)
    app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
    });