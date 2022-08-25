import { Request, Response, NextFunction } from 'express';
import authorization from './authorization';
import bdUsers from '../models/users';

class GetUsers{
    
    constructor(){
        
    }

    public async getUser(req: Request, res: Response, next: NextFunction){
        authorization.auth(req, res, next)
        try{
            res.status(200).json(await bdUsers.findAll())}
        catch(err){
            res.send({erro: err})
        }
    }
}

export default new GetUsers()