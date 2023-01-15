import { COURSE_STACK, TCourse, TStudents } from "./types"

export const courses: TCourse[] = [
    {
        id: "c001",
        name: "React",
        lessons: 12,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c002",
        name: "Styled Components",
        lessons: 4,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c003",
        name: "Express",
        lessons: 5,
        stack: COURSE_STACK.BACK
    }
]

export const students:TStudents[]=[
    {
        id:"001",
        name:"André",
        age:25
    },
    {
        id:"002",
        name:"Mariana",
        age:47
    }
]