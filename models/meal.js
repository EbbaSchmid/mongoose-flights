import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
	
const mealSchema = new Schema({
  meal: {
    type: String,
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number, min: 0
  }, 
})