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

//~ Courses
let courses = [
    { id: 1, name: 'ICS4U', instructor: 'Fred He' },
    { id: 2, name: 'SPH3U', instructor: 'Richie Tran'},
    { id: 3, name: 'PSK4U', instructor: 'Harrison Cazzin'}
]

app.get('/api/courses', (req, res) => {
    res.send(courses)
    
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) return res.status(404).send('Thou art unable to discover said educational material')
    res.send(course)
})

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name,
        age: req.body.age
    }

    courses.push(course)
    res.send(course)
})

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) return res.status(404).send('Thou art unable to discover said educational material')

    course.name = req.body.name
    course.age = req.body.age

    res.send(course)
})

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if(!course) return res.status(404).send('Thou art unable to discover said educational material')

    const index = courses.indexOf(course)
    courses.splice(index, 1)

    res.send(course)
})

//~Start the server
app.listen(PORT, () => console.log(`Thou sever hast begun on thy PORT of ${PORT}`))