const routeHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My Awesome Page></title></head>');
        res.write('<body>');
        res.write('<h1>Here is some random greeting.</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Sign Up</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>List of Users></title></head>');
        res.write('<body>');
        res.write('<h1>Here is list of users.</h1>');
        res.write('<ul><li>Bryan Warner</li><li>Felicia Warner</li><li>Paul Warner</li><li>Leah Warner</li><li>Ethan Warner</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
};

module.exports = routeHandler;
