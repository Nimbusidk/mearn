import mongoose from 'mongoose';
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    requiered:true  
},
  title: {
    type: String,
    requiered:true  
},
  type: {
    type: String,
    requiered:true  
},
  city: {
    type: String,
    requiered:true  
},
  address: {
    type: String,
    requiered:true  
},
  distance: {
    type: String,
    requiered:true  
},
  photos: {
    type: [String],    
},
  desc: {
    type: String,
    requiered:true  
},
  rating: {
    type: Number,
    min:0,
    max:5  
},
  romms: {
  type: [String], 
},
  cheapestPrice: {
  type: Number, 
  required:true
},
  featured: {
  type: Boolean,
  requiered:false  
},
});

export default mongoose.model("Hotel",HotelSchema)