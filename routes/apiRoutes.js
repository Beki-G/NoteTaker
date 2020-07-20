//Notes array
const notesArr = require("../db/db");


//routing

module.exports= function(app){

    //get raw json file
    app.get("/api/notes", (req, res)=>{
        //add id to each object
        notesArr.forEach((note, index)=>{note.id = index;})
        //send Notes 
        res.send(notesArr)
    })

    app.post("/api/notes", (req, res)=>{
        //post method
        console.log("I heard there was a post method?")
    })

    app.delete("/api/notes/:id", (req, res)=>{
        //delete method
        const noteId = req.params.id;

        console.log("Here's the noteID: ", noteId)

        notesArr.splice(noteId, 1);

        res.send(notesArr)
        
    })
}