// killall -9 node
// https://flaviocopes.com/express-forms/
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;


// middleware THUNK 
// middleware 
app.use(express.static('client'));
// By default, Express will look for a file called index.html 
// and serve that file whenever you browse to the root (/) route.
// app.use(express.urlencoded())

// parse some custom thing into a Buffer
// parse an HTML body into a string
// parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: 'application/*+json' }));
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
// app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })


function flatten(arr) {
    var newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) { debugger; }
        newarr = attachAllButChildren(newarr, arr[i])
        if (arr[i].children.length !== 0) {
            newarr = newarr.concat(flatten(arr[i].children));
        }
    }
    return newarr
}

function attachAllButChildren(newarr, toAdd) {
    var obj = {};
    for (let k in toAdd) {
        if (k !== 'children') {
            obj[k] = toAdd[k]
        }
    }
    return newarr.concat([obj]);
}
function csvConvert(data) {
    var result, ctr, keys, columnD, lineD;
    columnD = ',';
    lineD = '\n';
    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnD);
    result += lineD;
    data.forEach(item => {
        ctr = 0;
        keys.forEach(function (key) {
            if (ctr > 0) result += columnD;
            result += item[key];
            ctr++;
        });
        result += lineD;
    });
    return result;
}

app.post('/formSubmit', (req, res) => {
    const input = JSON.parse(req.body.JSONtext);
    var inputArr = attachAllButChildren([], input).concat(flatten(input.children));
    var csvStr = csvConvert(inputArr);
    res.setHeader('Content-disposition', 'attachment; filename=parse.csv');
    res.set('Content-Type', 'text/csv');
    res.status(200).send(csvStr);
}
);

app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    console.log(username);
    res.end()
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));



// Notes -- 
// localhost vs node server.js >> what's the difference? 
// <form onSubmit = functionName >  ---> only React allows this format 


