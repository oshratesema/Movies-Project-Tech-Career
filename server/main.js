const express = require("express");
const cors = require("cors");

const membersRouter = require("./routers/membersRouters");
const usersRouter = require("./routers/usersRouter");
const moviesRouter = require("./routers/moviesRouter");
const subsRouter = require("./routers/subscriptionsRouter");

const app = express();

require("./configs/database");

// Middlewares
app.use(cors());
app.use(express.json());

// routers
app.use("/members", membersRouter);
app.use("/users", usersRouter);
app.use("/movies", moviesRouter);
app.use("/subscriptions", subsRouter);

app.listen(7000, () => {
  console.log("Server is listening");
});
