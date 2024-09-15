import cookieParser from "cookie-parser";
import express, { response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRote from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
dotenv.config({});
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRote);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.listen(8000, () => {
  connectDB();
  console.log(`server running at port ${PORT}`);
});