const Todos = require('../models/todo_model');

exports.get_all_todos = async (req, res)=>{

    try {
        const todoResp = await Todos.find();
        res.status(200).json({data: todoResp});

    } catch (error) {
        res.status(error.status).json({message: error});
    }
}

exports.get_todo_by_id = async (req,res)=>{
    try {
        const {id} = req.params;
        const todoResp = await Todos.findById(id);
        res.status(200).json({data: todoResp});

    } catch (error) {
        res.status(error.status).json({message: error});
    }
}

exports.create_a_todo = async (req, res) =>{
    try {
        const {username, title , category} = req.body;
        if(!username) res.status(400).json({message: "Please add a username"});
        if(!title) res.status(400).json({message:"Please specify a title"});
        if(!category) res.status(400).json({message:"Please specify a category"});

        const newTodo = new Todos({
            username,
            title,
            category
        });

        const savedTodo = await newTodo.save();

        res.status(200).json({message:"Todo created successfully", obj: savedTodo});


    } catch (error) {
        res.status(error.status).json({message: error});
    }
}

exports.update_by_id = async (req, res) =>{

    try {
        const {id} = req.params;
        const todoResp = await Todos.findByIdAndUpdate(id,{done: true});
        res.status(200).json({data: todoResp});

    } catch (error) {
        res.status(error.status).json({message: error});
    }


}

exports.delete_by_id = async (req, res) =>{

    try {
        const {id} = req.params;
        const todoResp = await Todos.findByIdAndDelete(id);
        res.status(200).json({message: `Todo at id: ${id} deleted`});

    } catch (error) {
        res.status(error.status).json({message: error});
    }


}
