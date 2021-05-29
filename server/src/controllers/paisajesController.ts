import {Request, Response} from "express";
import pool from "../database";

class PaisajesController {
  public async list(req : Request, res : Response) {
    await pool.query("SELECT * FROM paisajes", function (err, result, fields) {
      if (err) 
        throw err;
      res.json(result);
    });
  }
  public async getOne(req : Request, res : Response) {
    const {id} = req.params;
    await pool.query("SELECT * FROM paisajes WHERE ID = ?", [id], function (err, result, fields) {
      if (err) 
        throw err;
      res.json(result);
    });
  }
  public async create(req : Request, res : Response) {
    await pool.query("INSERT INTO paisajes set ?", [req.body]);
    res.json({message: "Paisaje creado"});
  }
  public async update(req : Request, res : Response) {
    const {id} = req.params;
    await pool.query('UPDATE paisajes set ? WHERE ID = ?', [req.body, id]);
    res.json({message: "Paisaje actualizado"});
  }
  public async delete(req : Request, res : Response) {
    const {id} = req.params;
  await pool.query('DELETE FROM paisajes WHERE ID = ?', [id]);
  res.json ({menssage: "El paisaje fue eliminado"});
  }
}
export const paisajesController = new PaisajesController();
