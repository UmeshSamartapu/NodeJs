const http = require('http');
const server = http.createServer((req, res) => {


    if(req.url === '/'){

        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<Head><title>THIS IS MY WEB PAGE</title></Head>');
        res.write('<h1>HOME PAGE</h1>');
        res.write('<html>');
        return res.end();

    }
    else if(req.url === '/form')
        {

            res.write('<h1>HOME PAGE</h1>');
            res.write('<form action="submit_form.php" method="post">  ');
            res.write(' <label for="name">Name:</label> ');
            res.write(' <input type="text" id="name" name="name" required> ');
            res.write(' <br><br> ');

            res.write(' <label>Gender:</label> ');
            res.write(' <input type="radio" id="male" name="gender" value="male" required> ');
            res.write(' <label for="male">Male</label>');
            res.write(' <input type="radio" id="female" name="gender" value="female" required>');
            res.write(' <label for="female">Female</label> ');
            res.write(' <br><br> ');

            res.write('  <button type="submit">Submit</button>');
            res.write('</form>');
            return res.end();

        }
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<footer><p1>Thank You</p1></footer>');
        res.write('</html>');
        res.end();
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server running at http://localhost:3000 on port ${PORT}`);
});



// <form action="submit_form.php" method="post">
// <label for="name">Name:</label>
// <input type="text" id="name" name="name" required>
// <br><br>

// <label>Gender:</label>
// <input type="radio" id="male" name="gender" value="male" required>
// <label for="male">Male</label>
// <input type="radio" id="female" name="gender" value="female" required>
// <label for="female">Female</label>
// <br><br>

// <button type="submit">Submit</button>