const http = require('http');

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

server.listen(node-3dti.onrender.com, () => {
  console.log('Server pokrenut na http://localhost:3000');

});
