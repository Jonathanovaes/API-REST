import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import shortId from 'shortid';
import * as fs from 'fs';


class Authorization{
    
    constructor(){
        
    }

    public auth(req: Request, res: Response, next: NextFunction){
        const token = req.body.headers['x-access-token'];
        console.log(req.body.headers['x-access-token']);
        if (!token) {return res.status(401).json({ auth: false, message: 'No token provided.' });}
        let secret = fs.readFileSync('C:/Users/AN/Documents/sistema orientado a objeto/src/private.key', 'utf8')
        jwt.verify(token, secret, function(err:any, decoded:any){ 
        if (err) 
            return res.status(500).send({ auth: false, message: 'Token inválido.' }); 
        
        if(decoded.id==728){
            console.log("User Id: " + decoded.id)
            next();
        }
        else{return res.status(500).send({ auth: false, message: 'Token inválido.' });}
    });
    
    }
}

export default new Authorization()