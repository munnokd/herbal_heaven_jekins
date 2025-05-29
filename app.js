require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const socketManager = require("./socket/socketManager");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up socket.io but do not start server here
const http = require("http");
const server = http.createServer(app);
socketManager.init(server);
app.set("io", socketManager.getIO());

// Routes
app.get("/api/student", (req, res) => {
  res.json({
    name: "Kalp Prajapati",
    studentId: "224834542"
  });
});

// API route setup
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));
app.use("/api/blog", require("./routes/blogRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));
app.use("/api/notifications", require("./routes/notificationRoutes"));

// Static file serving
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Frontend fallback (skip if /api/)
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api/")) return next();
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

module.exports = { app, server }; // ✅ export both app and server
