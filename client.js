const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });



  conn.setEncoding("utf8");
  //connect to server with name
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MAH");
  });

  //get data from server
  conn.on('data', (messageFromTheServer) => {
    console.log(messageFromTheServer);
  });

  return conn;
};



console.log("Connecting ...");
connect();


module.export = { connect };