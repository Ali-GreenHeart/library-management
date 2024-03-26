import express from 'express'
import dotenv from 'dotenv'
import _users from './users.js'
dotenv.config()

const port = process.env.LIBRARY_MANAGEMENT_PORT
const app = express()
let users = [..._users]
// app isletmeliyik express json

app.use(express.json())
app.get('/', (req, res) => {
    console.log(req.query)
    res.json(users)
})
app.get('/:id', (req, res) => {
    const id = req.params.id
    const user = users.find((us) => us.id === id)
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(404).json({ message: 'User not found!' })
    }
})
app.post('/', (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.status(201).send({ message: 'user successfully has been created!' })
})
app.put('/:id', (req, res) => {
    const id = req.params.id;
    users = users.map((user) => {
        if (user.id === id) {
            return req.body
        }
        return user;
    })
    res.status(200).send({ message: 'user sucessfully updated!', id })
})
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    users = users.filter((us) => us.id !== id)
    res.status(200).send({ message: 'user sucessfully deleted!', id })
})
app.patch('/:id', (req, res) => {
    console.log(req.body)
    const id = req.params.id;
    users = users.map((user) => {
        if (user.id === id) {
            return { ...user, ...req.body }
        }
        return user;
    })
    res.status(200).send({ message: 'user sucessfully updated!', id })
})

app.listen(port, () => {
    console.log(`server is up on ${port}`)
})
