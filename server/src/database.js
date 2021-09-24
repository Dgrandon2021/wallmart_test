const mongoose = require('mongoose')

//mongoose.connect('mongodb://productListUser:productListPassword@localhost:27017')
mongoose.connect('mongodb://brandDiscountsUser:brandDiscountsPassword@test-desafiomongodb:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'desafio_walmart'
})
    .then(db => console.log('Db is conected to'))
    .catch('Error in Db connexion...',err => console.error(err))