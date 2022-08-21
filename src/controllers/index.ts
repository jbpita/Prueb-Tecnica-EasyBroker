import { Request, Response } from "express";
import getProperties from '../api/index';
import { ApiBrokerEasyInterfaces, Content } from '../interfaces/index';

class IndexController {
    
    public index (req: Request,  res: Response) {
        res
            .status(200)
            .send('Welcome to API EasyBroker');
    }

    public async properties (req: Request,  res: Response) {
        const response: ApiBrokerEasyInterfaces = await getProperties();
        const content: Content[] = response.content
        
        const listTtle: string[] = content.map( obj => obj.title)

        res
            .status(200)
            .json({
                'total': listTtle.length,
                'titles': listTtle
            });
    }
}



export const indexController = new IndexController();