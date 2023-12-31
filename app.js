import express from "express";
import Lab5 from "./lab5.js";
import Hello from "./hello.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";


const app = express();
app.use(express.json());
app.use(cors());
ModuleRoutes(app);
CourseRoutes(app);
Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000);
