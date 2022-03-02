const express = require("express");
const expressApp = express();
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>Hello Node</h1>");
});

router.get("/:id", (req, res, next) => {
  res.send(`<h1>Hello ${req.params.id}</h1>`);
});

router.post("/api/user", (req, res, next) => {
  const users = [{
      id: 00000,
      username: 'Blitzz',
      password: '1@B3ngal',
      email: 'blitzz44@gmail.com',
      createdOn: '',
  }];
  const id = `${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}`;

  if (req.body.user) {
    if(!users.length){
        users.push(req.body.user);
    }else{
        users.forEach((user,index)=>{
            if(user.username === req.body.user.username){
                
                res.status(409).json({statusCode:409, message: 'Username already exists.'})
            }else{
                  res.json({
                    statusCode: 200,
                    message: "Account created. Welcome",
                  });
                    users.push(req.body.user);
                    
                
            }
        })
    }
  }

});

router.post("/api/allowUser", (req, res, next) => {
  const users = [
    {
      id: 00000,
      username: "blitzz",
      password: "1@B3ngal",
      email: "blitzz44@gmail.com",
      createdOn: "",
    },
  ];

   users.forEach((user, index) => {
     if (user.username === req.body.user.username) {
       res.status(200).json({ statusCode: 200, message: "Welcome" });
     } else {
       res.json({
         statusCode: 409,
         message: "Account do not exist",
       });
     }
   });
});

module.exports = router;
