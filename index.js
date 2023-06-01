import HttpError from "http-errors";
import express from "express";
import path from "path";
import logger from "morgan";
import { fileURLToPath } from "url";
import fileUpload from "express-fileupload";






export const __filename = fileURLToPath(
    import.meta.url);
export const __dirname = path.dirname(__filename);
console.log(`Project Root dir : ${__dirname}`);




// 
let index = express();


// setting where i am taking the views pages and setting views engine to ejs  
index.set('views', path.join(__dirname, "views"));
index.set("view engine", "ejs");

//
index.use(logger("common"));
index.use(express.json());
index.use(fileUpload());
//app.use(session({ secret: 'Your_Secret_Key' }));

index.use(express.urlencoded({ extended: true }));

//setup cookie parser middleware
index.use(cookieParser());

//setup static folder for serving static files in Express
index.use(express.static(path.join(__dirname, 'public')));


// routes setup (pls focus team while filling this )
//home and about pages





export default index;