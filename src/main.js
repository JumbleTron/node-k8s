import http from 'http';
import url from "node:url";

const server = http.createServer(async (req, res) => {
    const uri = url.parse(req.url, true);
    if (uri.pathname === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ msg: "Hello World" } ));
        return;
    }
    if (uri.pathname === '/status' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: "up", services: [] } ));
        return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ msg: "Not found" } ));

});
server.listen(3000, () => console.log(`Server running at http://localhost:3000/`));