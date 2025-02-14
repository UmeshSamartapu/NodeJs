const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method, req.headers, req.url);

    if(req.url === '/home'){
        res.write(`<h1>HOME</h1>`);
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
        </nav>
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