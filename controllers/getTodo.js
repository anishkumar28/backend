// import the model
const Todo = require("../models/ToDo");

// define the route handler
exports.getTodo = async(req,res) => {
    try{
        // fetch all todo items from database
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire data fetched"
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success:false,
                data:"internal server error",
                message:err.message,
            }
        )
    }
}


exports.getTodoById = async(req,res) => {
    try{
        // fetch todo items by id from database
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        // data not found for given id
        if(!todo) {
            return res.status(404).json({
                success:false,
                message:"Data not found on this Id"
            });
        }

        //data found for given id
        res.status(200).json({
            success:true,
            data:todo,
            message: `Todo ${id} data successfully fetched`,
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success:false,
                data:"internal server error",
                message:err.message,
            }
        )
    }
}

