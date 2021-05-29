import { Request, Response } from 'express';
import pool from '../database';

class IndexController {
  
  public  list (req: Request, res: Response) {

        res.json({text: 'Api esta en api/paisajes'});
    }
  public  getOne (req: Request, res: Response) {

        res.json({text: 'Api esta en api/paisajes'});
    }
  public  create (req: Request, res: Response) {

        res.json({text: 'Api esta en api/paisajes'});
    }
  public  update (req: Request, res: Response) {

        res.json({text: 'Api esta en api/paisajes'});
    }
  public  delate (req: Request, res: Response) {

        res.json({text: 'Api esta en api/paisajes'});
    }
}
export const indexController = new IndexController();