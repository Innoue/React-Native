const mongoose = require('mongoose')

module.exports = () =>{
  console.log("Connecting MongoDB...")
  mongoose.connect('mongodb://localhost:27017/api-rest')
  .then(()=>{
    console.log("Connected with MongoDB")
  })
  .catch((error) =>{
    console.log("Error connecting MongoDB", error)
  })    
}
