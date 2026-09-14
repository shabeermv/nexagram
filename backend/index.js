import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import http from "http";
import fs from "fs";

// --------------------------------------------------
// PATH SETUP
// --------------------------------------------------

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// .env is in the project root, one level above /backend
dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

// --------------------------------------------------
// EXPRESS APP
// --------------------------------------------------

const app = express();
const server = http.createServer(app);

// --------------------------------------------------
// ENVIRONMENT
// --------------------------------------------------

const PORT = process.env.PORT || 5001;
const NODE_ENV = process.env.NODE_ENV || "development";

console.log("========================================");
console.log("NEXAGRAM SERVER");
console.log("========================================");
console.log("Environment:", NODE_ENV);
console.log("Port:", PORT);
console.log("Gmail User:", process.env.GMAIL_USER || "NOT SET");
console.log("Contact Receiver:", process.env.CONTACT_RECEIVER || "NOT SET");
console.log("========================================");

// --------------------------------------------------
// MIDDLEWARE
// --------------------------------------------------

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------------------------------------------------
// GMAIL SMTP
// --------------------------------------------------

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Check Gmail connection when server starts
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Gmail SMTP connection failed:");
    console.error(error.message);
  } else {
    console.log("✅ Gmail SMTP connection is ready");
  }
});

// --------------------------------------------------
// HEALTH CHECK
// --------------------------------------------------

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Nexagram backend is running",
    environment: NODE_ENV,
    emailConfigured: Boolean(
      process.env.GMAIL_USER &&
      process.env.GMAIL_APP_PASSWORD &&
      process.env.CONTACT_RECEIVER,
    ),
  });
});

// --------------------------------------------------
// CONTACT FORM API
// --------------------------------------------------

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("----------------------------------------");
    console.log("New contact form submission");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("----------------------------------------");

    // ----------------------------------------------
    // VALIDATION
    // ----------------------------------------------

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    if (!process.env.GMAIL_USER) {
      console.error("❌ GMAIL_USER is missing");
      return res.status(500).json({
        success: false,
        message: "Email configuration is missing.",
      });
    }

    if (!process.env.GMAIL_APP_PASSWORD) {
      console.error("❌ GMAIL_APP_PASSWORD is missing");
      return res.status(500).json({
        success: false,
        message: "Email configuration is missing.",
      });
    }

    if (!process.env.CONTACT_RECEIVER) {
      console.error("❌ CONTACT_RECEIVER is missing");
      return res.status(500).json({
        success: false,
        message: "Email receiver configuration is missing.",
      });
    }

    // ----------------------------------------------
    // EMAIL
    // ----------------------------------------------

    const mailOptions = {
      from: `"Nexagram Website" <${process.env.GMAIL_USER}>`,

      to: process.env.CONTACT_RECEIVER,

      replyTo: email,

      // Unique subject helps prevent Gmail conversation/thread confusion
      subject: `Nexagram Website Enquiry - ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8" />
          <title>Nexagram Website Enquiry</title>
        </head>

        <body
          style="
            margin: 0;
            padding: 0;
            background-color: #f4f6f8;
            font-family: Arial, Helvetica, sans-serif;
          "
        >

          <div
            style="
              max-width: 650px;
              margin: 30px auto;
              background: #ffffff;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            "
          >

            <!-- HEADER -->

            <div
              style="
                background: #0d0d4f;
                padding: 25px;
                text-align: center;
              "
            >
              <h1
                style="
                  margin: 0;
                  color: #ffffff;
                  font-size: 24px;
                "
              >
                Nexagram
              </h1>

              <p
                style="
                  margin: 8px 0 0;
                  color: #58B947;
                  font-size: 14px;
                "
              >
                The Digital Standard
              </p>
            </div>

            <!-- CONTENT -->

            <div style="padding: 30px;">

              <h2
                style="
                  margin-top: 0;
                  color: #0d0d4f;
                  font-size: 20px;
                "
              >
                New Website Enquiry
              </h2>

              <p
                style="
                  color: #555555;
                  font-size: 15px;
                  line-height: 1.6;
                "
              >
                You have received a new enquiry through the
                Nexagram website contact form.
              </p>

              <!-- NAME -->

              <div
                style="
                  margin-top: 25px;
                  padding: 15px;
                  background: #f7f8fa;
                  border-radius: 6px;
                "
              >
                <strong
                  style="
                    display: block;
                    color: #0d0d4f;
                    margin-bottom: 6px;
                  "
                >
                  Name
                </strong>

                <span style="color: #333333;">
                  ${escapeHtml(name)}
                </span>
              </div>

              <!-- EMAIL -->

              <div
                style="
                  margin-top: 12px;
                  padding: 15px;
                  background: #f7f8fa;
                  border-radius: 6px;
                "
              >
                <strong
                  style="
                    display: block;
                    color: #0d0d4f;
                    margin-bottom: 6px;
                  "
                >
                  Email
                </strong>

                <span style="color: #333333;">
                  ${escapeHtml(email)}
                </span>
              </div>

              <!-- MESSAGE -->

              <div
                style="
                  margin-top: 12px;
                  padding: 15px;
                  background: #f7f8fa;
                  border-radius: 6px;
                "
              >
                <strong
                  style="
                    display: block;
                    color: #0d0d4f;
                    margin-bottom: 6px;
                  "
                >
                  Message
                </strong>

                <p
                  style="
                    margin: 0;
                    color: #333333;
                    line-height: 1.7;
                    white-space: pre-wrap;
                  "
                >
                  ${escapeHtml(message)}
                </p>
              </div>

              <!-- REPLY BUTTON -->

              <div
                style="
                  text-align: center;
                  margin-top: 30px;
                "
              >
                <a
                  href="mailto:${escapeHtml(email)}"
                  style="
                    display: inline-block;
                    padding: 12px 25px;
                    background: #58B947;
                    color: #ffffff;
                    text-decoration: none;
                    border-radius: 6px;
                    font-weight: bold;
                  "
                >
                  Reply to Customer
                </a>
              </div>

            </div>

            <!-- FOOTER -->

            <div
              style="
                padding: 18px;
                background: #f1f3f5;
                text-align: center;
              "
            >
              <p
                style="
                  margin: 0;
                  color: #777777;
                  font-size: 12px;
                "
              >
                This email was sent from the Nexagram website.
              </p>
            </div>

          </div>

        </body>
        </html>
      `,
    };

    // ----------------------------------------------
    // SEND EMAIL
    // ----------------------------------------------

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully");
    console.log("Message ID:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("❌ Error sending contact email:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send your message. Please try again later.",
    });
  }
});

// --------------------------------------------------
// HTML ESCAPE FUNCTION
// Prevents HTML injection inside emails
// --------------------------------------------------

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// --------------------------------------------------
// VITE DEVELOPMENT / PRODUCTION
// --------------------------------------------------

if (NODE_ENV === "development") {
  // Vite development mode
  const { createServer: createViteServer } = await import("vite");

  const vite = await createViteServer({
    server: {
      middlewareMode: true,
    },
    appType: "spa",
  });

  app.use(vite.middlewares);

  console.log("✅ Vite development middleware enabled");
} else {
  // ------------------------------------------------
  // PRODUCTION
  // ------------------------------------------------

  const distPath = path.resolve(__dirname, "../dist");

  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));

    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });

    console.log("✅ Production frontend enabled");
    console.log("Frontend:", distPath);
  } else {
    console.error("❌ dist folder not found:", distPath);
  }
}

// --------------------------------------------------
// START SERVER
// --------------------------------------------------

server.listen(PORT, "0.0.0.0", () => {
  console.log("========================================");
  console.log(`🚀 Nexagram server running`);
  console.log(`📡 Port: ${PORT}`);
  console.log(`🌍 Environment: ${NODE_ENV}`);
  console.log("========================================");
});

// --------------------------------------------------
// ERROR HANDLING
// --------------------------------------------------

process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:");
  console.error(error);
});

process.on("unhandledRejection", (error) => {
  console.error("❌ Unhandled Promise Rejection:");
  console.error(error);
});
