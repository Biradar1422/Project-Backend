import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();
const app = express()

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;



app.use(cors())

//Home page
app.get("/courses", (req, res)=>{

    // const name = "Priya Biradar"
    // res.send(name)


    const courses = [
        {
            id: 1,
            courseName: "MERN"
        },
        {
            id: 2,
            courseName: "MEAN"
        },
        {
            id: 3,
            courseName: "MERP"
        }
    ]
    res.send(courses)
})

//Services Page
app.get("/services", (req, res)=>{
    res.send("Services page")
    
})


app.listen(port, ()=>{
    console.log(`server is running on http://${hostname}:${port}`)
})