const mongoose = require('mongoose');

var crud = {
    title: "loginFormAPI",
    statusCode: 200
}

//config
const db = require('./config/key').mongoURI;


// conneciton
mongoose.connect(db, { useNewUrlParser: true })
.then(()=>{
    console.log('conencted')
})
.catch((err) => {
    console.log('Error in database connection '+err);
})

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

}, { collection: 'users' })

var model = mongoose.model('users', userSchema);


crud.addData = function(req, res) {
    var postData = req.body;

    var data = {
        name: postData.name,
        email: postData.email,
        password: postData.password
    }

    var savedData = new model(data);
    savedData.save((err, myResult) => {
        if (err) {
            res.send({
                statusCode: 500,
                message: 'Data did not insertd'
            })
        } else {
            res.send({
                statusCode: 200,
                message: 'Data Inserted Succesfully',
                data: myResult
            });
        };
    })

}
