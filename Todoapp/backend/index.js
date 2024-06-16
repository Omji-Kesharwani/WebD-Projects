const express=require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app=express();
app.use(express.json());
const port=process.env.PORT||8001;
app.post("/todo",async(req,res)=>{
  const createPayload=req.body;
  const parsePayload=createTodo.safeParse(createPayload);
  if(!parsePayload.success)
    {
      res.status(411).json({
        msg:"Invalid Input Please try again!!",
      })
      return ;
    }
     await todo.create({
      title:createPayload.title,
      description:createPayload.description,
      completed:false,
    })
  
    res.status(200).json({
      msg:"Todo created",
    })
  })
  
  app.get("/todos",async(req,res)=>{
   try{
    const todos= await todo.find({});
    console.log(todos);
    res.status(201).json({
      msg:todos,
    })
   }
   catch(e){
    res.status(411).json({
      msg:"Something wrong went ",
    })
   }
  })
  
  app.put("./completed",async (req,res)=>{
  
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);
    if(!parsePayload.success)
      {
        res.status(411).json({
          msg:"Invalid Input Please try again!!",
        })
        return;
      }
     await todo.updateOne({_id},{
      completed:true,
     })
     res.status(201).json({
      msg:"Todo marked as completed",
     })
  })

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})