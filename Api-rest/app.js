const express = require('express')
const app = express()
const fs = require('fs/promises')
const jwt = require('jsonwebtoken')
const userSchema = require('./userSchema')
require('./mongoose')()


app.use(express.json())

app.get('/',(req, res) => {
  res.send('okay')
}) 

const secret = 'password'

app.use((req,res,next) =>{
  try {
    if(req.originalUrl == '/auth')
      return next()

    const{headers} = req;
    const auth = headers.authorization ? headers.authorization.replace('Bearer','').trim('') : ''
    jwt.verify(auth, secret, {algorithms: "HS256"})
    return next()
  } catch (error) {
    return res.status(401).json({message:"Token inválido"})
  }
})

app.get('/auth',async(req,res) => {
  const {user, password} = req.body

  const userExists = await userSchema.findOne({
    user, password
  })

  if(!userExists)
    return res.status(404).json({message: 'Usuário inválido'})

  const {usuario} = userExists
  const token = jwt.sign({usuario}, secret, {algorithm: "HS256", expiresIn:'2h'})
  res.status(200).json({token})
})

app.get('/users',async(req,res) => {
  const user = await userSchema.find()
  res.status(200).json(user)
})

app.get('/users/:id',async(req,res) => {
  const user = await userSchema.findById(req.params.id)
  res.status(200).json(user)
})

app.post('/users',async(req,res) => {
  const user = await userSchema.create(req.body)
  res.status(200).json(user)
})

app.put('/users/:id',async(req,res) => {
  const user = await userSchema.findByIdAndUpdate(req.params.id, req.body)
  res.status(200).json(user)
})

app.delete('/users/:id',async(req,res) => {
  const user = await userSchema.findByIdAndDelete(req.params.id)
  res.status(200).json(user)
})

app.listen(3000, () => console.log('Started API...'))

module.exports = app