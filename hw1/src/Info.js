import React, { Component } from "react";
export default class Server extends Component {
const express = require('express');
const app = express();
const inf = [
    [0, 'A' , 21],
    [1 , 'B' , 45],
    [2 , 'C' , 67]
];

app.get('/', function (req, res) {
    res.send(inf);
  });
  
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  } 