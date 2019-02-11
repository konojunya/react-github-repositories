import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import express from "express";
import methodOverride from "method-override";
import path from "path";

// controller
import controller from "./controller";

// express
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true,
  limit: "5mb"
}))
app.use(methodOverride());
app.use(cookieParser())
app.use(compression())

// static files
app.use("/assets/:version", express.static(path.join(__dirname, "../public"), {
  maxAge: process.env.NODE_ENV === "production" ? 1000 * 60 * 60 * 24 * 7 : 1000 * 60
}));

app.use(controller);

const HOST = process.env.HOST || "127.0.0.0";
const PORT = process.env.PORT || "5000";
app.listen(parseInt(PORT, 10), HOST, () => {
  console.log(`listen on port: http://${HOST}:${PORT}`);
})