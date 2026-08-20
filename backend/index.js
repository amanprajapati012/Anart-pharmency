require("dotenv").config();

const express = require("express");
const router = require("./router");
const adminRouter = require("./router/adminRoute");
const db = require("./db/connect");
const cors = require("cors");
const path = require("path");
const { initSocket } = require("./socket/socket");

const app = express();


// ==========================================
// DATABASE CONNECTION
// ==========================================
db();


// ==========================================
// CORS CONFIGURATION
// ==========================================

const allowedOrigins = [
  // Vercel Production
  "https://anart-pharmency.vercel.app",

  // Vercel Git/Main Deployment
  "https://anart-pharmency-git-main-karans-projects-57255f8f.vercel.app",

  // Local Development
  "http://localhost:3000",

  // Local Network
  "http://10.21.213.215",
  "http://192.168.1.39:8081",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests without an origin
      // Example: Postman, server-to-server requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("❌ CORS BLOCKED:", origin);

      return callback(
        new Error(`CORS policy blocked origin: ${origin}`)
      );
    },

    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "adminauthorization",
    ],

    credentials: true,
  })
);


// ==========================================
// BODY PARSER
// ==========================================

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// ==========================================
// STATIC UPLOADS
// ==========================================

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);


// ==========================================
// MAIN ROUTES
// ==========================================

app.use(router);


// ==========================================
// ADMIN ROUTES
// ==========================================

app.use("/admin", adminRouter);


// ==========================================
// HEALTH CHECK
// ==========================================

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Anart Pharmency API is running",
    timestamp: new Date().toISOString(),
  });
});


// ==========================================
// SERVER
// ==========================================

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Port: ${PORT}`);
});


// ==========================================
// SOCKET.IO
// ==========================================

initSocket(server);