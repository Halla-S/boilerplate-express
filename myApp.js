var express = require('express');
var app = express();
//challenge 11
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//Challenge 1
console.log("Hello World");


//Challenge 2
// app.get("/", (req, res) => {
//   res.send("Hello Express");
// })


//Challenge 3
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});



//Challenge 4
app.use("/public", express.static('public'));

//Challenge 5

// app.get("/json", function (req, res) {
//   res.json({"message":"Hello json"});
// });

 //Challenge 6

const mySecret = process.env['MESSAGE_STYLE'];
app.get("/json", (req, res) => {
  if(process.env.MESSAGE_STYLE === "uppercase"){


       res.json({"message": "HELLO JSON"})}
       else{
         res.json({ "message": "Hello json"})

       }
  
});

//Challenge 7
app.get('/json', (req, res, next)=>{
console.log(`${req.method} ${req.path} - ${req.ip}`);
next();
});


//Challenge 8
app.get('/now', (req,res, next) =>{
  
  next();
}, function(req, res){
 var time =  new Date()
  console.log('time',time);
  res.json({'time': time});
}
       );
 //Challenge 9
app.get("/:word/echo",(req,res)=>{
  res.json({echo:req.params.word})
})
//challenge 10
//  the rout: /name?first=<forstname>&last=<lastname>
app.get("/name",(req,res)=>{
   res.json({name:req.query.first+" "+ req.query.last})
})

//Challenge 12
app.post("/name",(req,res)=>{
  res.json({name : req.body.first+" "+req.body.last})

})



 module.exports = app;


