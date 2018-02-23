module.exports = {
    insert: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {propertyname,propertydescription}= req.body

        dbInstance.insertfirstvalues([propertyname,propertydescription])
        .then(()=> res.status(200).send(res.data))
        .catch(()=> res.status(500).send())

    },
    getAll: (req,res,next) => {
        const dbInstance = req.app.get('db')
        
        dbInstance.getAll([])
        .then((houses)=> res.status(200).send(houses))
        .catch(()=> res.status(500).send())
    }
}