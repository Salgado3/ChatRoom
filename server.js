const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  let route = "./views/";

  switch (req.url) {
    case "/":
      route += "index.html";
      break;
    case "/contact":
      route += "contact.html";
      break;

    default:
      route += "404.html";
      break;
  }

  fs.readFile(route, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
