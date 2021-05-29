"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    list(req, res) {
        res.json({ text: 'Api esta en api/paisajes' });
    }
    getOne(req, res) {
        res.json({ text: 'Api esta en api/paisajes' });
    }
    create(req, res) {
        res.json({ text: 'Api esta en api/paisajes' });
    }
    update(req, res) {
        res.json({ text: 'Api esta en api/paisajes' });
    }
    delate(req, res) {
        res.json({ text: 'Api esta en api/paisajes' });
    }
}
exports.indexController = new IndexController();
