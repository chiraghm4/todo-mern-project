const todoSchema = require("../model/todo");

const getTodo = async (req, res) => {
  try {
    const allTodos = await todoSchema.find();
    // console.log(allTodos)
    res.send(allTodos);
  } catch (err) {
    console.log(err);
  }
};

const createTodo = async (req, res) => {
  const { todo, desc } = req.body;
  try {
    const newTodo = await todoSchema.create({
      todo: todo,
      desc: desc,
    });
    res.status(200).send("todo added successfully");
  } catch (err) {
    console.log(err);
  }
};

const updateTodo = async (req, res) => {
    console.log(req.params.id)

    const {todo, desc} = req.body
    // console.log(req.body, 'body')
    // console.log(todo, desc, 'body')
    try {
        const updatedTodo = await todoSchema.findOneAndUpdate(
          {
            _id: req.params.id,
          },
          {
            $set: { todo: `${todo}`, desc: `${desc}` },
          }
        );
        res.send('updated given todo')
    } catch (err) {
        console.log(err)
    }
};

const deleteTodo = async (req, res) => {
  const id = req.params.id

  try {
    const deletedTodo = await todoSchema.deleteOne({
      _id: id,
    });
    res.send("todo has been deleted")
  } catch (err) {
    console.log(err)
  }
};

module.exports = { createTodo, updateTodo, deleteTodo, getTodo };