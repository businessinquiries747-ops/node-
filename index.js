const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Test</title>
      </head>
      <body>
        <h1>Otvorite konzolu (F12)</h1>
        <script>
          console.log("Zdravo iz browser konzole!");
        </script>
      </body>
    </html>
  `);
});

server.listen(PORT);
