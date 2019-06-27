const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
    changeOrigin: true
});

proxy.on('proxyReq', function (proxyRequest) {
    proxyRequest.setHeader('Authorization', 'Basic ' + Buffer.from(process.env['JIRA_USERNAME'] + ':' + process.env['JIRA_PASSWORD']).toString('base64'));
});

const server = http.createServer(function (req, res) {
    if (/\/rest\/api\/(.*)$/.test(req.url)) {
        proxy.web(req, res, {
            target: process.env['JIRA_HOSTNAME']
        });
        return;
    }

    // Otherwise, throw an error
    res.writeHead(401);
    res.write("You're not allowed to access that URL");
    res.end();
});

console.log("Now listening on port 5050");

server.listen(5050);
