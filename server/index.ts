import Express from "express";

const app = Express();
const cors = require("cors");
import router from "./router";
import { PORT } from "./config";

app.use(cors());
app.use(Express.json());
app.use(router);

app
  .listen(PORT, (): void => {
    console.log(`Server running on port ${PORT}`);
  })
  .on("error", (error) => {
    console.log(error);
  });
