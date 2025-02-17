const express = require('express');
const app = express();
const myRepository = require('./myRepository.js');
// for body from form
app.use(express.urlencoded({ extended: true }));
// for body as JSON (from javascript)
app.use(express.json());


app.get('/members', async(req,res)=>{
    res.json(await myRepository.GetMembersBalanceDetails());
});

app.get('/', async(req,res)=>{
    res.json(await myRepository.GetMembersBalanceDetails());
});









app.use(express.static('public'));
//=========================


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`My app is listening on port ${PORT}`);
});