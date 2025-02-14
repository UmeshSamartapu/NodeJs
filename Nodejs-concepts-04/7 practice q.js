const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.method, req.headers, req.url);

    if(req.url === '/'){
        res.write(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
</head>
<body>
    <head>
        <nav>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/form">Form</a></li>
        </nav>
    </head>
</body>
</html>
            `);
    }
    else if(req.url === '/home'){
        res.write(`
            <h1>HOME</h1>
            
            `);
        return res.end();
    }
    else if(req.url === '/men'){
        res.write(`<h1>MEN</h1>`);
        return res.end();
    }
    else if(req.url === '/women'){
        res.write(`<h1>WOMEN</h1>`);
        return res.end();
    }
    else if(req.url === '/kids'){
        res.write(`<h1>KIDS</h1>`);
        return res.end();
    }
    else if(req.url === '/cart'){
        res.write(`<h1>CART</h1>`);
        return res.end();
    }
    else if(req.url === '/form'){
        res.write(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
</head>
<body>
    <form action="/submit_details" method="post">
        <label for="">Name</label>
        <input type="text" placeholder="name" name="name" id="name">

        <label for="gender">Male</label>
        <input type="radio" name="gender" id="male" value="male">

        <label for="gender">Female</label>
        <input type="radio" name="gender" id="female" value="female">

        <button type="submit">Button</button>
    </form>
</body>
</html>
            `);
            return res.end();
    }
    else if (req.method === 'POST' && req.url.toLowerCase() === '/submit_details'){
        fs.writeFileSync('user_details.txt', 'umesh');
        
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

    res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
</head>
    </head>
    <footer><p>Thank for visiting our webpage</p></footer>
</body>
</html>
        `);
});

const PORT = 3000;

server.listen(PORT, (req, res) => {
    console.log(`server running at http://localhost:${PORT}`);
});