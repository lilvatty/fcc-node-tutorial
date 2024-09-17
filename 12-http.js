const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('HOME PAGE');
  }
  if(req.url === '/about'){
    res.end('ABOUT PAGE');
  }
  res.end(`
    <h1>Oooopsss!</h1>
    <p>We can't find the page that you looking for</p>
    <a href="/">go back to home page</a>
    `)
})

server.listen(5000);