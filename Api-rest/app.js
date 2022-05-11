const express = require('express')
const app = express()
const fs = require('fs/promises')
const jwt = require('jsonwebtoken')
const userSchema = require('./userSchema')
require('./mongoose')()
const {body, validationResult} = require('express-validator')

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

app.post('/auth',async(req,res) => {
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
  if(!user) 
    return res.status(404).json({message:"User not found"})
  res.status(200).json(user)
})

app.post('/users',[
  body('user').notEmpty(),
  body('password').isLength({min: 8})
],
  async(req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty())
      return res.status(400).json({error: errors.array()})
    const{user, password} = req.body
    const userS = await userSchema.create({user, password})
    res.status(200).json(userS)
})

app.put('/users/:id',[
  body('user').notEmpty(),
  body('password').isLength({min: 8})
],
async(req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty())
    return res.status(400).json({error: errors.array()})
  const{user, password} = req.body
  const userS = await userSchema.findByIdAndUpdate(req.params.id, {user, password}, {new: true})
  res.status(200).json(userS)
})

app.delete('/users/:id',async(req,res) => {
  const user = await userSchema.findByIdAndDelete(req.params.id)
  res.status(200).json(user)
})

app.listen(3000, () => console.log('Started API...'))

module.exports = app