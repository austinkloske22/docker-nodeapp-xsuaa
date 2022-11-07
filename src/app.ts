import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { Pool } from "pg";
// import passport from "passport";

// const { JWTStrategy } = require("@sap/xssec");
// const xsenv = require("@sap/xsenv");

const app = express();

dotenv.config(); //Reads .env file and makes it accessible via process.env

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432")
});

const connectToDB = async () => {
  try {
    await pool.connect();
  } catch (err) {
    console.log(err);
  }
};

/*
// Scope check
function checkReadScope(req: any, res:Response, next:NextFunction) {
	if (req.authInfo.checkLocalScope('read')) {
		return next();
	} else {
    	console.log('Missing the expected scope');
    	res.status(403).end('Forbidden');
	}
}


const env = xsenv.loadEnv(); // loads default-env.json

passport.use(new JWTStrategy(xsenv.getServices({ uaa: { tag: "xsuaa" } }).uaa));

app.use(passport.initialize());
app.use(passport.authenticate("JWT", { session: false }));
*/
connectToDB();

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.send("hi");
});

app.listen(process.env.PORT, () => {  
  console.log(`Server is running at ${process.env.PORT}`);
});

