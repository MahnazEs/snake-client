
const { connect } = require("./client");
const { setupInput } = require("./input");


const net = require("net");

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = key => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === MOVE_UP) {
      conn.write('Move: up');
    } else if (key === MOVE_LEFT) {
      conn.write('Move: left');
    } else if (key === MOVE_DOWN) {
      conn.write('Move: down');
    } else if (key === MOVE_RIGHT) {
      conn.write('Move: right');
    } else if (MESSAGES[key]) {
      conn.write(MESSAGES[key]);
    }
  };
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  return stdin;
};

moudule.export = { setupInput };

// establishes a connection with the game server
/* const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: '50541'// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (messageFromTheServer) => {
    console.log(messageFromTheServer);
  });

  return conn;
}; */

//console.log("Connecting ...");
//connect();