'use strict';
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect( 'mongodb://serverBoiler:<Your Password Boy>@cluster0-shard-00-00.t30x6.mongodb.net:27017,cluster0-shard-00-01.t30x6.mongodb.net:27017,cluster0-shard-00-02.t30x6.mongodb.net:27017/MultipInageUploader?ssl=true&replicaSet=atlas-1r1rhb-shard-0&authSource=admin&retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => console.log('Connected to Mongodb......'));
}
