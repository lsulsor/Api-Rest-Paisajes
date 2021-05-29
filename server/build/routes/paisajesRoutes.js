"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paisajesController_1 = require("../controllers/paisajesController");
class PaisajesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', paisajesController_1.paisajesController.list);
        this.router.get('/:id', paisajesController_1.paisajesController.getOne);
        this.router.post('/', paisajesController_1.paisajesController.create);
        this.router.put('/:id', paisajesController_1.paisajesController.update);
        this.router.delete('/:id', paisajesController_1.paisajesController.delete);
    }
}
const paisajesRoutes = new PaisajesRoutes();
exports.default = paisajesRoutes.router;
