import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// GET /flights/new
router.get('/', flightsCtrl.index)

router.get('/new', flightsCtrl.new)

router.post('/', flightsCtrl.create)

router.get('/:id', flightsCtrl.show)

router.get('/:id/edit', flightsCtrl.edit)

router.delete('/:id', flightsCtrl.delete)

router.delete('/:id/tickets/:ticketId', flightsCtrl.deleteTicket)

router.put('/:id', flightsCtrl.update)

router.post('/:id/tickets', flightsCtrl.create)

// POST /flights/:id/meals
router.post('/:id/meals', flightsCtrl.newMeal)

export {
	router
}