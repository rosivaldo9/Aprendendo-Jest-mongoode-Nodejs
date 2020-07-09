const TodoModel= require("../Model/User");

exports.createTodo = async (req, res)=>{
    const createModel = await TodoModel.create(req.body);
    res.json(createModel);
}