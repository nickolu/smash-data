var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Contact = new Schema({
    email:      { type: String },
    name: {
        first:  { type: String },
        last:   { type: String }
    },
    phone:      { type: String },
    gravatar:   { type: String }
});

var GameEntry = new Schema({
    match : {
        stock : {type: Number, default: 3},
        timer : {type: Number, default: 0},
        items : {type: Boolean, default: false},
        players : {type: Number, default: 2},
        customs : {type: Boolean, default: false)},
        date : {
            fought : {type: Date, default: Date.now},
            recorded : {type: Date, default: Date.now}
        }
    },
    players : [{
        id : String,
        kills : Number,
        deaths : Number,
        suicides : Number,
        character : String,
        rank : Number,
        controllerType : String
    }]
});

var Player = new Schema ({
    id : String,
    name : String,
    gravatar : String,
    description : String
});

var Character = new Schema ({
    id : String,
    name : String
});

module.exports = {
    Contact: mongoose.model('GameEntry', GameEntry),
    Contact: mongoose.model('Player', Player),
    Contact: mongoose.model('Character', Character)
};
