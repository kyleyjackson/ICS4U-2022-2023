import express from 'express'

const app = express()
const PORT = process.env.PORT || 5000

//~Middleware
app.use(express.json())

let students = [
    { id: 1, name: 'Fred', age: 100 },
    { id: 2, name: 'Kyle', age: 16 },
    { id: 3, name: 'Steeuzs Christ', age: 54}
]

//~Routes
app.get('/', (req, res) => res.send('Thou art but a fool'))

app.get('/api/students', (req, res) => {
    res.send(students)
})

app.get('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id))
    if(!student) return res.status(404).send('Thou art unable to discover said juvenile learner')
    res.send(student)
})

app.post('/api/students', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    }

    students.push(student)
    res.send(student)
})

app.put('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id))
    if(!student) return res.status(404).send('Thou art unable to discover said juvenile learner')

    student.name = req.body.name
    student.age = req.body.age

    res.send(student)
})

app.delete('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id))
    if(!student) return res.status(404).send('Thou art unable to discover said juvenile learner')

    const index = students.indexOf(student)
    students.splice(index, 1)

    res.send(student)
})

//~Start the server
app.listen(PORT, () => console.log(`Thou sever hast begun on thy PORT of ${PORT}`))