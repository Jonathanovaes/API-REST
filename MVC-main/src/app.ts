import bodyParser from 'body-parser';
import  express from 'express';
import rotas from './routes/routes';

export class App{
    private express: express.Application;
    private port: number = 5000;
    constructor(){
        this.express = express()
        this.middlewares();
        this.listen();
    }
    private middlewares(): void {
        this.express.use(bodyParser.json())
        this.express.use(rotas.router)
    }
    private listen(): void {
        this.express.listen(this.port, ()=>{
            console.log("Servidor iniciado na porta "+ this.port);
        })
    }
}

//const app: App = new App();