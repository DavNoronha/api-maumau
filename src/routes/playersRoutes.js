import express from "express";
import PlayerController from "../controllers/playersController.js";

const router = express.Router();

router
    .get('/players', PlayerController.getPlayers)
    .get('/players/:id', PlayerController.getPlayerById)
    .post('/players', PlayerController.createPlayer)
    .put('/players/:id', PlayerController.updatePlayer)
    .delete('/players/:id', PlayerController.deletePlayer)

export default router