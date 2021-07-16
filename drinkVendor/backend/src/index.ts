import "reflect-metadata";
import { createConnection } from "typeorm";
import server from "./server";


createConnection().then(async connection => {
  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`listing on port ${port}`)
  })
}).catch(error => console.log(error));
