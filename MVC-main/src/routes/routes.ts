import express from "express";
import authenticate from "../controllers/authenticate";
import users from "../controllers/getUsers";

class Router{
    public router = express.Router();
    constructor(){
        this.router.post('/autenticacao', authenticate.index);
        this.router.get('/users', users.getUser);
    }
}


export default new Router()