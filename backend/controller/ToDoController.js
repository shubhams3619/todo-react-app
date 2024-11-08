const ToDoModel = require("../models/ToDoModels")

module.exports.getToDos = async (req, res) => {
    const toDos = await ToDoModel.find()
    res.send(toDos)
}

module.exports.saveToDo = (req, res) => {
    const {ToDo} = req.body

    ToDoModel.create({ToDo})
    .then((data)=>{
        console.log("Saved SuccessFully...");
        res.status(201).send(data)
        
    })
    .catch((error)=>{
        console.log("Error while saving ToDo...", error);
        res.status(500).send(error)
    })
}


module.exports.updateToDo = (req, res) => {
    const {id} = req.params
    const {ToDo} = req.body

    ToDoModel.findByIdAndUpdate(id, {ToDo})
    .then(()=>{
        res.send("Updated SuccessFully...");
        
    })
    .catch((error)=>{
        console.log("Error while updating ToDo...", error);
        res.status(500).send(error)
    })
}

module.exports.deleteToDo = (req, res) => {
    const {id} = req.params

    ToDoModel.findByIdAndDelete(id)
    .then(()=>{
        res.send("Deleted SuccessFully...")
        
    })
    .catch((error)=>{
        console.log("Error while deleting ToDo...", error);
        res.status(500).send(error)
    })
}
