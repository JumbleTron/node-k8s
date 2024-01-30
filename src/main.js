import http from 'http';

const server = http.createServer(async (_, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ msg: "Hello World" } ));
});
server.listen(3000, () => console.log(`Server running at http://localhost:3000/`));