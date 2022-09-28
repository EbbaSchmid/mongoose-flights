import { Flight } from "../models/flight.js"
import { Meal } from "../models/meal.js"

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights',
    })
  })
  .catch(error => { 
    console.log(err)
    res.redirect('/flights')
  })
}

function create(req, res) {
  if (req.body.departs) {
    req.body.departs = req.body.departs
    }
  Flight.create(req.body)
  .then(flight => {
    res.redirect(`/flights`)
    })
  .catch(err => {
    res.redirect('/flights')
    })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', {  
      flight: flight,
      title: 'Flight Detail',
    })    
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect("/flights")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}


function edit(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render("flights/edit", {
      flight: flight,
      title: "Edit Flight",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function update (req, res) {
  Flight.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteTicket(req,res) {
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.remove(req.params.ticketid)
    flight.save()
    .then(() => {
      res.redirect('/flights/${flight._id}')
    })
    .catch(error => {
      console.log(error)
      res.redirect('/flights')
    })
  })
}

export {
  newFlight as new,
  index,
  create,
  show,
  deleteFlight as delete,
  edit,
  update,
  createTicket,
  deleteTicket,

}