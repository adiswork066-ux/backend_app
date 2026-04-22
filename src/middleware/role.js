module.exports = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: "Forbidden! Only administrators can perform this action. " });
    }
    next();
  };
};