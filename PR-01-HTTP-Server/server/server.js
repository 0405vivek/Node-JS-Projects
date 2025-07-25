const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    let fillName= "";
    switch (req.url){
        case '/':
            fillName = 'index.html';
            break;
        case '/about':
            fillName = 'about.html';
            break;
        case '/contact':
            fillName = 'contact.html';
            break;
        case '/courses':
            fillName = 'courses.html';
            break;
        case '/signup':
            fillName = 'signup.html';
            break;
        case '/blog':
            fillName = 'blog.html'; 
            break;   
        default:
            fillName = '404.html';
    } 

    let data = fs.readFileSync(fillName, 'utf-8');
    res.end(data);
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
    console.log('http://localhost:8000');
})