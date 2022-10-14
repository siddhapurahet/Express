/* const express = require("express");
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

app.get("/api/courses", (req, res) => {
    res.send(courses);
})

app.put("api/courses/:id", (req, res) => {
    const courseid = courses.find(c => c.id === parseInt(req.params.id));
    if(!courseid){
        res.status(404);
        return;
    }
    courseid.name = req.body.name;
    res.send(courseid);
})

app.post("/api/courses", (req, res) => {
    if(!req.body.name){
        res.status(400).send("Please enter the field");
        return;
    } 
    if(req.body.name.length < 3){
        res.status(400).send("Enter proper name");
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
})

app.delete("/api/courses/:id", (req, res) => {
    const courseid = courses.find(c => c.id === parseInt(req.params.id));
    if(!courseid){
        res.status(404).send("Course not found");
    }
    const index = courses.indexOf(courseid);
    courses.splice(index, 1);
    res.send(courseid);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})

*/


//--------------------------------------------------------

const express = require("express");
const moviesapp = express();
const logger = require("./logger");
moviesapp.use(express.json());

moviesapp.use(logger);

const movies = [
    {id: 1, genre: "horror"},
    {id: 2, genre: "Romance"},
    {id: 3, genre: "comedy"},
    {id: 4, genre: "Sci-fi"}
]

moviesapp.get("/", (req, res) => {
    res.send("Welcome to the Movies");
});

moviesapp.get("/api/movies/:id", (req, res) => {
    const index = movies.find( mid => mid.id === parseInt(req.params.id));
    if(!index){
        res.status(404);
        return;
    }
    res.send(index);
})

moviesapp.get("/api/movies", (req, res) => {
    res.send(movies);
})

moviesapp.put("/api/movies/:id", (req, res) => {
    const index = movies.find( mid => mid.id === parseInt(req.params.id));
    if(!index){
        res.status(404);
        return;
    }
    index.genre = req.body.genre;
    res.send(index);
})

moviesapp.delete("/api/movies/:id", (req, res) => {
    const movieindex = movies.find( index => index.id === parseInt(req.params.id));
    if(!movieindex){
        res.status(404).send("Invalid Id");
        return;
    }
    const movietodel = movies.indexOf(movieindex);
    movies.splice(movietodel, 1);
    res.send(movieindex);
});

moviesapp.post("/api/movies/postmovie", (req, res) => {
    
    const moviegenre = {
        id: movies.length + 1,
        genre: req.body.genre
    }
    for(let gen in movies){
        if(req.body.genre === movies.genre){
            res.send(400).send("Already present");
        }
    }
    movies.push(moviegenre);
    res.send(moviegenre);
});

const port = process.env.PORT || 3000;
moviesapp.listen(port, () => {
    console.log(`Listening on ${port}`);
})
