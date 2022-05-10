const express = require('express')
const app = express()
const fs = require('fs/promises')
const jwt = require('jsonwebtoken')

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
  const file = JSON.parse(await fs.readFile('./user.json', 'utf-8'))
  const [userExists] = file.filter((users) => users.usuario == req.body.usuario &&  users.senha == req.body.senha)

  if(!userExists)
    return res.status(404).json({message: 'Usuário inválido'})

  const {usuario} = userExists
  const token = jwt.sign({usuario}, secret, {algorithm: "HS256", expiresIn:'2h'})
  res.status(200).json({token})
})

app.get('/users',async(req,res) => {
  const file = JSON.parse(await fs.readFile('./user.json', 'utf-8'))
  res.status(200).json(file)
})

app.get('/users/:id',async(req,res) => {
  const file = JSON.parse(await fs.readFile('./user.json', 'utf-8'))
  const user = file.filter((users) => users.id == req.params.id)
  res.status(200).json(user.shift())
})

app.post('/users',async(req,res) => {
  const file = JSON.parse(await fs.readFile('./user.json', 'utf-8'))
  let id = 1
  if(file.length > 0)
    id = parseInt(file[file.length - 1].id) + 1

  file.push({id, ...req.body})  
  await fs.writeFile('./user.json', JSON.stringify(file))
  res.status(200).json(req.body)
})

app.put('/users/:id',async(req,res) => {
  const file = JSON.parse(await fs.readFile('./user.json', 'utf-8'))
  
  file.map((value, index)=>{
    if(value.id == req.params.id){
      file[index] = {id: value.id, ...req.body}
    }
  })

  await fs.writeFile('./user.json', JSON.stringify(file))
  res.status(200).json(req.body)
})

app.delete('/users/:id',async(req,res) => {
  const file = JSON.parse(await fs.readFile('./user.json', 'utf-8'))
  
  file.map((value, index)=>{
    if(value.id == req.params.id){
      file.splice(index, 1)
    }
  })

  await fs.writeFile('./user.json', JSON.stringify(file))
  res.status(200).json(req.body)
})

app.listen(3000, () => console.log('Started API...'))

module.exports = app