module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')

        db.get_houses()
            .then(results => {
                res.status(200).send(results)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send('Whoopsie')
            })
    },
    addHouses: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        
        db.add_houses([1, id]).then(results => {
            res.status(200).send(results)
        })
    },
    deleteHouses: (req, res) => {
        let {id} = req.params
        let db = req.app.get('db')
        db.delete_houses([id]).then(results => {
            res.status(200).send(results)
        })
    },
}
