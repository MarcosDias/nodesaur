import http from 'http';

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Buba Buba');
}).listen(3000);

console.log('Buba Buba');
