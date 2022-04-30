//Usando un objeto express
const express = require('express')
//app de express
const app = express()
// Puerto en que vamos a ver nuestra app localhost :300
const port = 3000

//path inicial, respondera a la url localhost:3000

app.get('/',(req,res) => {
    res.send('Hello World!')
})


//Con esto inicializamos esta app

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
})




app.get('/home',(req,res) => {
    res.send('bienvenido a esta pagina perros')
})

