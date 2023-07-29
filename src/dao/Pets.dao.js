const petModel = require("./models/Pet.js")

class Pet {

    get = (params) =>{
        return petModel.find(params)
    }

    getBy = (params) =>{
        console.log(params)
        return petModel.findOne({_id: params});
    }

    save = (doc) =>{
        return petModel.create(doc);
    }

    update = (id,doc) =>{
        return petModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return petModel.findByIdAndDelete(id);
    }
}

module.exports = Pet