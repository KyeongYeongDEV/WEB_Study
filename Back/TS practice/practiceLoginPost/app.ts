import {json, urlencoded } from "express";
import v1 from "./api/v1/index";
import session from "express-session";
import app from "./server"

/**@OPTION BODY_PARSER & Session */
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(
  session({
    secret: "secret",
    saveUninitialized: false,
    resave: false,
  })
);
/**@ROUTER per VERSION */
app.use("/api/v1", v1);






