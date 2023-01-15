import express, { application, Request, Response } from 'express'
import cors from 'cors'
import { courses, students } from './database'
import { TCourse } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

app.get("/courses",(req:Request, res:Response)=>{
    res.status(200).send(courses)
})


app.get("/courses/search",(req:Request, res:Response)=>{
    const q = req.query.q as string

    const coursesFilter = courses.filter(
        course=>course.name.toLocaleLowerCase().includes(q.toLocaleLowerCase())
    )

    res.status(200).send(coursesFilter)
})

app.post("/courses", (req:Request, res:Response)=>{
    const id = req.body.id
    const name = req.body.name
    const lessons = req.body.lessons
    const stack= req.body.stack
    
    const newCourse:TCourse =  {
        id,
        name,
        lessons,
        stack
    } 

    courses.push(newCourse)
    res.status(201).send("Curso adicionadocom sucesso!")

})

app.get("/students",(req:Request, res:Response)=>{
    res.status(200).send(students)
})