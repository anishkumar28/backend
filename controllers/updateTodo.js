// import the model
const Todo = require("../models/ToDo");

// define the route handler
exports.updateTodo = async(req,res) => {
    try{
        const {id} = req.params;
        const {title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()},
        )

        //data updated for given id
        res.status(200).json({
            success:true,
            data:todo,
            message: `Todo ${id} data updated successfully`,
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