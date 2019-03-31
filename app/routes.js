module.exports = function(app, db) {
console.log(db)
// normal routes ===============================================================

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

// movie api routes ===============================================================

    app.post('/saveMovie', (req, res) => {
      console.log(req.body.movieInfo)
      console.log(req.body.movieInfo.Title)
      db.collection('movie').save({title: req.body.movieInfo.Title}, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
      })
    })

    app.get('/saveMovie', (req, res) => {
      db.collection('movie').find().toArray((err,result) => {
        if (err) return console.log(err)
        res.json(result)
      })

    })

    app.put('/saveMovie', (req, res) => {
      db.collection('movies')
      .findOneAndUpdate({/* TBD */}, {
        $set: {
          // TBD
        }
      }, {
        sort: {_id: -1},
        upsert: true
      }, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
      })
    })

    app.delete('/saveMovie', (req, res) => {
      db.collection('movies').findOneAndDelete({/* TBD */}, (err, result) => {
        if (err) return res.send(500, err)
        res.send('Message deleted!')
      })
    })

};
