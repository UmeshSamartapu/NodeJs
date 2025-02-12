//Create a NodeJs server

//step 03
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req);
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
    console.log(`server running at port http://localhost:3000`);
});

//step 01
// console.log("Hello World !");
// const http = require('http');
// function requestListener(req, res){
//     console.log(req);
// }
// http.createServer(requestListener);

//step02
// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log(req);
// });
// server.listen(3000);