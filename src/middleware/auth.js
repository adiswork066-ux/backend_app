const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log("AUTH HIT");

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    console.log("No Authorization header");
    return res.status(401).json({ message: "No token" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    console.log("Token missing");
    return res.status(401).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    console.log("Token verified");
    next();
  } catch (err) {
    console.log("Invalid token");
    return res.status(401).json({ message: "Invalid token" });
  }
};