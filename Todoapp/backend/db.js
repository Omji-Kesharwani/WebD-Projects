const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://admin1:df6KMOw0ZC4bTwtv@omjihelper.ppekmck.mongodb.net/TodoLists')
.then(()=>{
  console.log("connection is successfull");
});

const todoSchema=new mongoose.Schema({
  title:String,
  description:String,
  completed:Boolean,
})

const todo=mongoose.model("todo",todoSchema);
module.exports={todo};