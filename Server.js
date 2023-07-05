const http = require("http");
require("dotenv").config();
const app = require(`./app/app`);

http.createServer(app).listen(process.env.PORT, () => {
  console.log(`Server is running in port`, process.env.PORT);
});
