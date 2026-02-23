// Uvezi http modul
const http = require('http');

// Definiraj port
const PORT = 3000;

// Napravi server
const server = http.createServer((req, res) => {
  // Provjeri da li je ruta '/'
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Pozdrav, dobrodošao na početnu stranicu!</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Stranica nije pronađena</h1>');
  }
});

// Pokreni server
server.listen(PORT, () => {
  console.log(`Server radi na http://localhost:${PORT}`);
});
