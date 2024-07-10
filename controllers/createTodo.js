// import the model
const Todo = require("../models/ToDo");

// define the route handler
exports.createTodo = async(req,res) => {
    try{
        // extract title and description from request body
        const{title,description} = req.body;

        // create a new Todo Object and inser in Database
        const response = await Todo.create({title,description});

        // send a json response witha success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry create successfully'
            }
        )
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