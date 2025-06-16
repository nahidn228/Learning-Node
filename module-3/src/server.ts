import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
import dotenv from "dotenv";
import { client } from "./config/mongodb";
dotenv.config();
let server;
const port = 5000;



const bootstrap = async () => {
  await client.connect();
  console.log("Connected to MongoDB");



  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootstrap();
