const express = require("express");
const app = express();
const port = process.env.port || 8080;

// Scope check
function checkReadScope(req, res, next) {
	if (req.authInfo.checkLocalScope('read')) {
		return next();
	} else {
    	console.log('Missing the expected scope');
    	res.status(403).end('Forbidden');
	}
}

// secure the direct call to the application
const passport = require("passport");
const { JWTStrategy } = require("@sap/xssec");
const xsenv = require("@sap/xsenv");

// XSUAA Middleware
const env = xsenv.loadEnv();
passport.use(new JWTStrategy(xsenv.getServices({ uaa: { tag: "xsuaa" } }).uaa));

app.use(passport.initialize());
app.use(passport.authenticate("JWT", { session: false }));

app.get("/", checkReadScope, (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example node app listening on port ${port}`);
});
