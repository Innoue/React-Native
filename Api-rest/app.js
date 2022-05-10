const express = require('express')
const app = express()
const fs = require('fs/promises')

app.use(express.json())

app.get('/',(req, res) => {
  res.send('okay')
}) 

app.get('/users',async(req,res) => {
  const file = JSON.parse(await fs.readFile('./user.json', 'utf-8'))
  res.status(200).json(file)
  console.log('GET - /users')
})

app.get('/users/:id',async(req,res) => {
  const file = JSON.parse(await fs.readFile('./user.json', 'utf-8'))
  const user = file.filter((users) => users.id == req.params.id)
  res.status(200).json(user.shift())
  console.log('GET by ID - /users:id')
})

app.post('/users',async(req,res) => {
  const file = JSON.parse(await fs.readFile('./user.json', 'utf-8'))
  let id = 1
  if(file.length > 0)
    id = parseInt(file[file.length - 1].id) + 1

  file.push({id, ...req.body})  
  await fs.writeFile('./user.json', JSON.stringify(file))
  res.status(200).json(req.body)
  console.log('POST - /users')
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
  console.log('PUT - /users/:id')
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
  console.log('DELETE - /users/:id')
})

app.listen(3000, () => console.log('Started API...'))

module.exports = app