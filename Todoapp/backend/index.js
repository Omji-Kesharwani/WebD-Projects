const express=require("express");
const { createTodo, updateTodo } = require("./types");
const app=express();
const port=process.env.PORT||5001;

app.post("/todo",(req,res)=>{
const createPayload=req.body;
const parsePayload=createTodo.safeParse(createPayload);
if(!parsePayload)
  {
    res.status(411).json({
      msg:"Invalid Input Please try again!!",
    })
    return;
  }
})

app.get("/todos",(req,res)=>{

})

app.put("./completed",(req,res)=>{

  const updatePayload=req.body;
  const parsePayload=updateTodo.safeParse(updatePayload);
  if(!parsePayload)
    {
      res.status(411).json({
        msg:"Invalid Input Please try again!!",
      })
      return;
    }

})
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})