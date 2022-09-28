import { Meal } from '../models/meal.js'

function newMeal (reg, res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      title: "Add Meal",
      meals: meals
    })
  })

.catch(err => {
  console.log (err)
  res.redirect("/flights")
})
}

function create(req, res) {
  Performer.create(req.body)
  .then(meal => {
    res.redirect('/meals/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/meals/new')
  })
}

export {
  create,
  newMeal as new
}