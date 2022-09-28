import { Performer } from "../models/performer.js"

function newPerformer(req, res) {
  Performer.find({})
  .then(performers => {
    res.render('performers/new', {
      title: 'Add Performer',
      performers: performers
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function create(req, res) {
  Performer.create(req.body)
  .then(performer => {
    res.redirect('/performers/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/performers/new')
  })
}

export {
  create,
  newPerformer as new
}