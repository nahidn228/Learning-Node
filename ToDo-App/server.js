const http = require("http");
const server = http.createServer((req, res) => {
  // res.end("Welcome to ToDo-App Server");

  if (req.url === "/todos" && req.method === "GET") {
    res.end("ALL ToDos here");
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end(" ToDos created");
  } else {
    res.end("Route not Found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("✅ server Listening to port 5000 ✔ ");
});
