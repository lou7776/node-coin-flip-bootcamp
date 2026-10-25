// 
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }


// game logic 

  else if (page == '/api') {
    if ('coinFlip' in params) {
      if (params['coinFlip'].toLowerCase() == 'heads') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        const coinChoices = ['heads', 'tails']

        let winOrLose

        let outcome = coinChoices[Math.floor(Math.random() * coinChoices.length)]

        if (outcome == params['coinFlip'].toLowerCase()) {
          winOrLose = 'win'

        } else {
          winOrLose = 'lose'

        }

        const objToJson = {
          name: "Heads",
          winOrLoseMessage: `you ${winOrLose}`,
          outcome: `the flip was ${outcome}`
        }


        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if (params['coinFlip'].toLowerCase() == 'tails') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        const coinChoices = ['heads', 'tails']

        let winOrLose

        let outcome = coinChoices[Math.floor(Math.random() * coinChoices.length)]

        if (outcome == params['coinFlip'].toLowerCase()) {
          winOrLose = 'win'

        } else {
          winOrLose = 'lose'

        }

        const objToJson = {
          name: "tails",
          winOrLoseMessage: `you ${winOrLose}`,
          outcome: `the flip was ${outcome}`
        }

        


        res.end(JSON.stringify(objToJson));
      }//student != leon
      else{
        res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(Json.stringify({
          name: 'invalid',
          winOrLoseMessage: 'type heads or tails',
          outcome: ''

      }));

      }
    }//student if
  }//else if
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/css' })
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);






