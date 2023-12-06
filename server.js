const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname));

io.on('connection', (socket) => {
  console.log('Client connected');
  // Simulate real-time log updates (same code as your setInterval)
  setInterval(function() {
    const suspiciousLog = 'Suspicious network activity detected!';
    socket.emit('logUpdate', suspiciousLog, Math.random() < 0.5);
  }, 2000);
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
