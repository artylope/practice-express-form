console.log("hello");

const express = require('express');
const app = express();

// tell your app to use the module. this is the one that extract the form response in the post request and split the = and "" so that it can return into request.body
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));


//routes

//get
app.get('/banana', (request, response) => {
  console.log('getting form');

  let form = '<html><body><h1>Hello its me</h1><form method="POST" action="/doingpost"><input name="name"/><input name="phone"/><input type="submit"/></form></body></html>';
  response.send(form);

});

//post
app.post('/doingpost', (request, response) => {
  console.log('posting');
  console.log(request.body);
  response.send('yay');
});

// port listening
app.listen(4000, function(){
  console.log('listening to port 4000');
});
