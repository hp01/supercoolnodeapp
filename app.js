// Beschreibung des kompletten Ablaufs:
// https://medium.freecodecamp.org/how-to-deploy-your-super-cool-node-app-to-azure-from-github-47ebff6c5448
const http = require('http');
const port=process.env.PORT || 3000
// https://hpnodeapp.azurewebsites.net
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!!!!</h1>');
});
server.listen(port,() => {
    console.log('Server running at port '+port);
});
