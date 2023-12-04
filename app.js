import express from "express";
import Lab5 from "./lab5.js";
import Hello from "./hello.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";
import mongoose from "mongoose";
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

import UserRoutes from "./users/routes.js";
import session from "express-session";


const connection_string =
//  "mongodb+srv://anishasingh:<password>@cluster0.e0xmaci.mongodb.net/?retryWrites=true&w=majority" 
//  || 
"mongodb://127.0.0.1:27017/kanbas";

mongoose.connect(connection_string);


const app = express();
app.use(express.json());
const allowedOrigins = [
    process.env.FRONTEND_URL, "http://localhost:3000"
]
app.use(
    cors({
        credentials: true,
        origin: allowedOrigins
    })
);


const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  app.use(session(sessionOptions));
  
app.use(
    session(sessionOptions)
);

ModuleRoutes(app);
CourseRoutes(app);
Hello(app);
Lab5(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);
