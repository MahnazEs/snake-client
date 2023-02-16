const net = require('net');
const { IP, PORT } = require('./constants');


const connect = function () {
  const conn = net.createConnection({
    host: IP,//'165.227.47.243',
    port: PORT //'50541'
  });

  conn.on('connect', (connect) => {
    console.log('Snake Game Server says >>');
  });

  conn.setEncoding("utf8");
  //connect to server with name
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MAH");
  });

  conn.on('data', (data) => {
    console.log('You are done!!!');
  });


  //get data from server
  conn.on('data', (messageFromTheServer) => {
    console.log(messageFromTheServer);
  });

  return conn;
};





module.export = { connect };