const express = require('express')
const app = express()
const port = 3000

const db = express.require('better-sqlite')('./STUD.db')

app.get('/', (req, res) => {
  res.json('А ')
})

app.post('/', (req, res) => {
  res.json('Б')
})

app.put('/', (req, res) => {
  res.json('В')
})

app.delete('/', (req, res) => {
  res.json('Г')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})