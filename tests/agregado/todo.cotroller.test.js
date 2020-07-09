const request = require('supertest');
const app = require("../../server");
const newTodo = require('../mock-data/new-todo.json')

const endpointUrl = "/todos";

describe('endpointUrl', ()=>{
    jest.useFakeTimers();
    it("Testando Url POST  " + endpointUrl, async ()=>{
        const response = await request(app)
        .post(endpointUrl)
        .send(newTodo);
        expect(response.statusCode).toBe(200);
        expect(response.body.title).toBe(newTodo.title);
        expect(response.body.done).toBe(newTodo.done);


    });
});