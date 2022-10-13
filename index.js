const express = require("express");
const app = express();

app.use(express.json());

const courses = [
    {id: 1, course: "ABC"},
    {id: 2, course: "DEF"},
    {id: 3, course: "GHI"},
    {id: 4, course: "JKL"}
]

app.get("/", (req, res) => {
    res.send("Hello World...");
});

app.get("/api/courses/:id", (req, res) => {
    const answer = courses.find(c => c.id === parseInt(req.params.id));
    if(!answer){
        res.status(404).send("Course with this ID does not exist");
    }
    else{
        res.send(answer);
    }
});

app.get("/api/courses/:month/:year", (req, res) => {
    res.send(req.params);
})

app.post("/api/courses", (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})