const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Welcome to ToDo-App Server");
});

server.listen(5000, "127.0.0.1", () => {
  console.log("✅ server Listening to port 5000 ✔ ");
});
