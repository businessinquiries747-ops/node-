// server.js
const http = require('http');

// Render dodjeljuje port preko environment varijable
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Pozdrav, dobrodošao na početnu stranicu!</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Stranica nije pronađena</h1>');
  }
});

server.listen(PORT, () => {
  console.log(`Server radi na portu ${PORT}`);
});