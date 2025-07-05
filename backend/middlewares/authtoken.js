const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Normalize user ID so req.user.id is always present
    req.user = {
      id: decoded.id || decoded._id, // Use whichever was encoded in the token
      ...decoded,
    };

    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};