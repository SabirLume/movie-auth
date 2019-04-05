module.exports = function(app, db) {
console.log(db)
// normal routes ===============================================================

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
      db.collection('movie').find().toArray((err, result) => {
        res.render('index.ejs', {
          movies: result
        })
      })
    })

// movie api routes ===============================================================

    app.post('/api/movie', (req, res) => {
      console.log(req.body)
      console.log(req.body.movieInfo)
      db.collection('movie').save({movieInfo: req.body.movieInfo}, (err, result) => {
       console.log(req.body)
        if (err) return console.log(err)
        console.log('saved to database')
        
      })
    })

    app.put('/api/movie', (req, res) => {
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

    app.delete('/api/movie', (req, res) => {
      db.collection('movies').findOneAndDelete({/* TBD */}, (err, result) => {
        if (err) return res.send(500, err)
        res.send('Message deleted!')
      })
    })

};
