// const users = require ('../users')
const users = {
    id:0,
    username:'alex',
    password:'alex'
}
const id = 1
module.exports={
        login: (req, res, next ) => {
            console.log('fuego')
            const {session} = req;
            const {username, password} = req.body;
    
            const user = users.find(user=>user.username === username && user.password === password)
    
            if (user){
                console.log('has fired')
                session.user.username = user.username;
                res.status(200).send(session.user);
            }else {
                res.status(500).send('Not Permitted')
            }
        },
        register: (req, res, next) => {
            console.log('has fired')
            const {session} = req;
            const {username, password} = req.body;
    
            users.push({id ,username, password});
            id++;
            
            console.log('has fired')
            session.user.username = username;
            res.status(200).send(session.user);
        },
        
   



}