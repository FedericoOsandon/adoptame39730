const userModel = require("./models/User.js")


class Users {
    
    get = (params) =>{
        const users = userModel.find({});
        console.log(users)
        return users
    }

    getBy = (params) =>{
        return userModel.findOne(params);
    }

    save = (doc) =>{
        return userModel.create(doc);
    }

    update = (id,doc) =>{
        return userModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return userModel.findByIdAndDelete(id);
    }
}

module.exports = Users