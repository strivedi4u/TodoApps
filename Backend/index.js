const connectToMongo = require(`./db`);

const express = require(`express`);
var cors=require(`cors`);
connectToMongo();

const app= express();


const port = process.env.PORT || 5000 ;

app.use(cors());
app.use(express.json());




app.use(`/api/task`, require(`./routes/task`));


app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.listen(port,()=>
{
    console.log("Listening to port ");
    console.log(port);
})
