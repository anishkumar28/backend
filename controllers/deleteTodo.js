// import the model
const Todo = require("../models/ToDo");

// define the route handler
exports.deleteTodo = async(req,res) => {
    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        //data deleted for given id
        res.json({
            success:true,
            message: `Todo data deleted successfully`,
        })

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success:false,
                data:"Internal server error",
                message:err.message,
            }
        )
    }
}