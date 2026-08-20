require("dotenv").config();

const express = require("express");
const router = require("./router");
const adminRouter = require("./router/adminRoute");
const db = require("./db/connect");
const cors = require("cors");
const path = require("path");
const { initSocket } = require("./socket/socket");

const app = express();


// ==============================
// DATABASE
// ==============================
db();


// ==============================
// CORS — MUST BE BEFORE ROUTES
// ==============================
app.use(
  cors({
    origin: true,
    credentials: true,
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
  })
);


// ==============================
// BODY PARSER
// ==============================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ==============================
// UPLOADS
// ==============================
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);


// ==============================
// ROUTES
// ==============================
app.use(router);

app.use("/admin", adminRouter);


// ==============================
// HEALTH CHECK
// ==============================
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Anart Pharmency API is running",
  });
});


// ==============================
// SERVER
// ==============================
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


// ==============================
// SOCKET
// ==============================
initSocket(server);