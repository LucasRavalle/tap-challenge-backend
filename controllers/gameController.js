const DB = require('../database/models');

module.exports = {
    show: (req, res) => {
        DB.Game
            .findByPk(req.params.id, {
                include: [{
                    association: "stateGame"
                }],
                attributes: { exclude: ['state_id'] }
                }
                )
            .then(game => {
                if(game){ 
                    //Este condicional se hace porque si game.cells no tiene nada retornará null y se espera [].
                    if(!game.cells){
                        game.cells = [];
                    }
                    res.status(200).json({ game: game, cells: game.cells});
                } else {
                    res.status(404).json('Game not found.');
                }
            })
            .catch(err => {
                res.json(err);
            })     
    },
    create: (req, res) => {
        DB.Game 
            .create({
                state_id: 1,
                created_at: new Date()
            })
            .then(game => {
                return DB.Game.findByPk(game.id, {
                    include: [{
                        association: "stateGame"
                    }],
                    attributes: { exclude: ['state_id'] }
                    })
            })
            .then(game => {
                res.status(201).json({ 
                    message: 'Game created!',
                    game: game,
                    cells: [] 
                });
            })
            .catch(err => {
                res.json(err);
            })
    },
    update: (req, res) => {
        const {id, cells} = req.body;
        //Este condicional se hace para verificar que el req.body llegue correctamente
        if(id && cells){
            DB.Game
                .update({ cells: cells.toString()}, 
                    {
                        where: {
                            id: id
                        },
                        include: [{
                            association: "stateGame"
                        }]
                    })
                .then( () => {
                    DB.Game
                        .findByPk(req.body.id, {
                            include: [{
                                association: "stateGame"
                            }],
                            attributes: { exclude: ['state_id'] }
                            }
                            )
                        .then(game => {
                            if(game){
                                res.status(200).json({ 
                                    message: 'Game updated!',
                                    game: game, 
                                    cells: game.cells
                                });
                            } else {
                                res.status(404).json('Game not found');
                            }
                        })
                })
                .catch(err => {
                    res.json({err});
                })
        } else {
            res.status(400).json('Game not updated, body is wrong')
        }
        
    }
};