import express from "express";
// import path from "path";
import {json} from "body-parser";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import {dbSetup} from "./dbConnection/dbSetup";

const app = express();
dbSetup();

app.use(morgan("combined"));
app.use(json());
app.use(cors());

require("./routes")(app);

app.listen(process.env.PORT || 8081, () => {
  console.log(`Server listening on port: ${process.env.PORT}`);
});
