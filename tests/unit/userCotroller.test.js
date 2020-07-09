const TodoController = require('../../controller/UserControllerr');
const httpMocks = require("node-mocks-http"); // testa as rotas express 
const TodoModel = require('../../Model/User');
const newTodo = require("../mock-data/new-todo.json");

TodoModel.create = jest.fn();// criar uma função simulada

let req, res, next;
beforeEach(()=>{
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
})

describe("Testando funções da Controller", ()=>{

   beforeEach(()=>{
        req.body = newTodo;
    })


    it('Testando se a função Create existe', ()=>{
        expect(typeof TodoController.createTodo).toBe("function");
    }),
    it('Testando model', async()=>{
        TodoController.createTodo(req, res, next);
        expect(TodoModel.create).toBeCalledWith(newTodo); //chamando função simulada
    }),
    it('Testando a chamada final', async ()=>{
        await TodoController.createTodo(req, res, next);
        expect(res.statusCode).toBe(200);
        expect(res._isEndCalled()).toBeTruthy();
    }),
    it('Testando a função create', async ()=>{
        TodoModel.create.mockReturnValue(newTodo);
        await TodoController.createTodo(req, res, next);
        expect(res._getJSONData()).toStrictEqual(newTodo);
    })

})