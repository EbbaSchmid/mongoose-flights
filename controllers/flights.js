import { Flight } from '../models/flight.js'



function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight",
  })
}

function create(req, res) {
  res.redirect('/flights')  // update this line
}

export {
  newFlight as new,
  create,
}
