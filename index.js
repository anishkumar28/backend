const express= require("express");
const app = express();

//load config form env file
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

// import routes for TODO API 
const todoROutes = require("./routes/todos");

// mount the todo API routes
app.use("/api/v1",todoROutes);


// start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

// connect to database
const dbConnect = require("./config/database");
dbConnect();


// default route
app.get("/", (req,res) => {
   res.send(`<h1>This is Homepage</h1>`); 
})