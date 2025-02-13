const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    
    console.log(req.url , req.method, req.headers);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>FORM</title></head>');
        res.write('<h1>HOME PAGE</h1>');
        res.write('</html>');
        return res.end();
    } else if (req.url === '/form') {
        res.write('<html>');
        res.write('<body>');
        res.write('<h3>Fill The Form</h3>');
        res.write('<form action="/submit_form" method="POST">');
        res.write('<label for="name">Name:</label>');
        res.write('<input type="text" id="name" name="name" required>');
        res.write('<br><br>');

        res.write('<label>Gender:</label>');
        res.write('<input type="radio" id="male" name="gender" value="male" required>');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="female" name="gender" value="female" required>');
        res.write('<label for="female">Female</label>');
        res.write('<br><br>');

        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');

        res.write('</html>');

        return res.end();
    } 
    else if (req.method === 'POST' && req.url.toLowerCase() === '/submit_form') {

        fs.writeFileSync('user_details.txt', 'umesh\n');
        res.statusCode = 302;
        res.setHeader('Location', '/form');
    
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<footer><p> ThankYou - Like  - Share - subscribe </p></footer>');
    res.write('</html>');
    res.write('</html>');
    res.end();


});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
