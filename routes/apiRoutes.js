//Notes array
const notesArr = require("../db/db");

//routing
module.exports= function(app){

    //get current notes, index and return them
    app.get("/api/notes", (req, res)=>{
        //add id to each object
        notesArr.forEach((note, index)=>{note.id = index+1;})
        //send Notes 
        res.send(notesArr)
    })

    
    app.post("/api/notes", (req, res)=>{
        //from the request get object and attach to notesArr
        notesArr.push(req.body);
        //Index the new obj
        (!notesArr) && (notesArr[notesArr.length].id = notesArr.length) 

        res.send(notesArr);
    })

    app.delete("/api/notes/:id", (req, res)=>{
        //delete method
        const noteId = req.params.id;

        console.log("Here's the noteID: ", noteId)

        notesArr.splice(noteId-1, 1);

        res.send(notesArr)
        
    })
}