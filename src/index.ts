import express from "express";
import bodyParser from "body-parser";

const app = express();

const port = process.env.PORT || 3000;

const autos = [{id: 1, mark: 'BMW'}, {id: 2, mark: 'Mercedes'}];

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)

app.get('/auto', (req, res) => {
    if (req.query.mark) {
        res.send(autos.filter(a => a.mark.indexOf(req.query.mark) > -1 ))
    } else {
        res.send(autos)
    }
})
app.post('/auto', (req, res) => {
    const newAuto = {
        id: +(new Date()),
        mark: req.body.mark
    }
    autos.push(newAuto)
    res.status(201).send(newAuto)
})
app.get('/auto/:id', (req, res) => {
     let auto = autos.find(a => a.id === +req.params.id);
     if (auto) {
         res.send(auto)
     } else {
         res.send(404)
     }
})
app.delete('/auto/:id', (req, res) => {
    for (let i = 0; i < autos.length; i++) {
        if (autos[i].id === +req.params.id) {
            autos.splice(i, 1)
            res.send(204)
            return;
        }
    }
    res.send(404)
})
app.put('/auto/:id', (req, res) => {
    let auto = autos.find(a => a.id === +req.params.id);
    if (auto) {
        auto.mark = req.body.mark
        res.send(auto)
    } else {
        res.send(404)
    }
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})