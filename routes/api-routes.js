var db = require('../models');

module.exports = function(app) {
    app.get('/api/burgers', function(req, res){
        db.Burger.findAll({}).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    app.post('/api/burgers', function(req, res){
        console.log(req.body);

        db.Burger.create({
            name: req.body.name,
            devoured: req.body.devoured
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    app.put('/api/burgers', function(req, res){
        db.Todo.update({
            devoured: req.body.devoured
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });
};