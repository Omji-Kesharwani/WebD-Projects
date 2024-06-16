function CreateTodo(){
return <div>
  <input type="text" placeholder="Title" className="title-input"/>
  <input type="text" placeholder="Description" className="description-input"/>
  <button className="todoBtn">Add a todo</button>
</div>
}
export default CreateTodo;