const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

//! ROUTES
const productsRouter = require("./routes/productsRouter");
const gamesRouter = require("./routes/gamesRouter");
const pcsRouter = require("./routes/pcsRouter");
const usersRouter = require("./routes/usersRouter");
const cartsRouter = require("./routes/cartsRouter");
const {
  routeNotFound,
  globalErrorHandler,
} = require("./middleware/errorHandlers");

//! INIT
const app = express();

const corsOptions = {
  origin: "game-craze-tech.netlify.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
//! MIDDLEWARE
app.use(cors(/* corsOptions */));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use("/products_gct", productsRouter);
app.use("/games_gct", gamesRouter);
app.use("/pcs_gct", pcsRouter);
app.use("/users", usersRouter);
app.use("/carts", cartsRouter);

//! Error Handling middleware
app.use(routeNotFound);
app.use(globalErrorHandler);

//! CONNECT TO DB
const { DB_PROTOCOL, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME, DB_QUERIES } =
  process.env;

const URI = `${DB_PROTOCOL}${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?${DB_QUERIES}`;
mongoose.set("strictQuery", false);
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("error", console.error)
  .once("open", () => console.log("Database connection established!😀"));

module.exports = app;
