import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import shortId from 'shortid';
import * as fs from 'fs';



class Authenticate{
    constructor(){
        
    }

    public index(req: Request, res: Response){
        if(req.body.user =='@Johnnovaes' && req.body.password == 'MK8dIZmWjgMeZDdW'){
            //let id: string = shortId();
            let secret = fs.readFileSync("./private.key", 'utf8');
            let token =  jwt.sign({id: 728}, secret, {expiresIn: 300});
            res.json(token);
        }else{
            res.status(500).json({message: 'Autenticação inválida!'});
        }
    }
}

export default new Authenticate()