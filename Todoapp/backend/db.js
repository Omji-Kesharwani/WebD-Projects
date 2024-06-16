const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://admin1:df6KMOw0ZC4bTwtv@omjihelper.ppekmck.mongodb.net/TodoLists')
.then(()=>{
  console.log("connection is successfull");
});

const todoSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  description:{
  type:String,
  required:true,
},
  completed:{
    type:Boolean,
    default:false,
  },
})

const todo=mongoose.model("todo",todoSchema);
module.exports={todo};