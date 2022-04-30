import players from "../models/Player.js";

class PlayerController {
    static getPlayers = (req, res) => {
        players.find((error, players) => {
            if(error) {
                console.log('GET PLAYERS ERROR: ', error)

                res.status(500).send({
                    code: 500,
                    data: [],
                    message: 'Server error.'
                })
            } else {
                res.status(200).send({
                    code: 200,
                    data: players,
                    message: 'ok'
                });
            }
        })
    }

    static getPlayerById = (req, res) => {
        const id = req.params.id;

        players.findById(id, (error, player) => {
            if(error) {
                console.log('FIND PLAYER BY ID ERROR: ', error)

                res.status(500).send({
                    code: 500,
                    data: [],
                    message: 'Server error.'
                })
            } else {
                res.status(200).send({
                    code: 200,
                    data: player,
                    message: 'ok'
                });
            }
        })
    }

    static createPlayer = (req, res) => {
        const player = new players(req.body);

        player.save((error) => {
            if(error) {
                console.log('CREATE PLAYER ERROR: ',error)

                res.status(500).send({
                    code: 500,
                    data: [],
                    message: 'Server error.'
                })
            } else {
                res.status(200).send({
                    code: 201,
                    data: player.toJSON(),
                    message: 'ok'
                })
            }            
        })
    }

    static updatePlayer = (req, res) => {
        const id = req.params.id;

        players.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if(error) {
                console.log('UPDATE PLAYER ERROR: ', error)

                res.status(500).send({
                    code: 500,
                    data: [],
                    message: 'Server error.'
                })
            } else {
                res.status(200).send({
                    code: 200,
                    data: [],
                    message: 'ok'
                })
            }

        })
    }

    static deletePlayer = (req, res) => {
        const id = req.params.id;

        players.findByIdAndDelete(id, (error) => {
            if(error) {
                console.log('DELETE PLAYER ERROR: ', error)

                res.status(500).send({
                    code: 500,
                    data: [],
                    message: 'Server error.'
                })
            } else {
                res.status(200).send({
                    code: 200,
                    data: [],
                    message: 'ok'
                })
            }
        })
    }
}

export default PlayerController