const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.static('componentes'));

var users = [{
  userid:"roger",
  password: "1234"
},
{
  userid:"usera",
  password: "8524"
}
];
app.get('/', (req, res)=>{
      res.sendfile('index.html');
});

app.post('/musica', (req, res)=>{
  body = req.body;
  if(check(body.userid, body.password))
    res.sendfile('musica.html');
});

function check(u, ps){
  for(let i =0 ; i < users.length; i++)
		  if(u == users[i].userid && ps == users[i].password){
        return true;
    }	
    return false;
}

app.listen(5000, () =>{
    console.log("Server Running on port 5000");
});