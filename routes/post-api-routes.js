// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/notes", function(req, res) {
    var query = {};
    if (req.query.note_id) {
      query.id = req.query.id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.note.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  // GET route for getting all of the posts
  app.post("/api/find-notes", function(req, res) {
    var filter = {};

    if (req.body.find != '') {
      filter.where = {
        note: {
          $like: '%' + req.body.find + '%'
        }
      }
    }

    db.note.findAll(filter).then(function(data) {
      res.json(data);
    });
  });

  // Get rotue for retrieving a single post
  app.get("/api/notes/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Author]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // POST route for saving a new post
  app.post("/api/notes", function(req, res) {
    var note = req.body;
    note.noteTypeId = 1;
    db.note.create(req.body).then(function(data) {
      res.redirect('/');
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/notes/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating posts
  app.put("/api/notes", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
        res.json(dbPost);
      });
  });
};
