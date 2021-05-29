import { Router } from 'express';
import {paisajesController} from '../controllers/paisajesController';

class PaisajesRoutes {

   public router: Router = Router();
   constructor(){
       this.config();


   } 
   config(): void{
    this.router.get('/', paisajesController.list);
    this.router.get('/:id', paisajesController.getOne);
    this.router.post('/', paisajesController.create);
    this.router.put('/:id', paisajesController.update);
    this.router.delete('/:id', paisajesController.delete);
    

   }

}

const paisajesRoutes = new PaisajesRoutes();
export default paisajesRoutes.router;