import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import http from "http";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, ".env"),
});

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Gmail SMTP connection failed:");
    console.error(error);
  } else {
    console.log("✅ Gmail SMTP connection is ready");
  }
});

// Health API
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "Nexagram Backend Service",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// Courses API
app.get("/api/courses", (req, res) => {
  res.status(200).json({
    success: true,
    courses: [
      {
        id: "react-masterclass",
        title: "React & Cloud Architecture Masterclass",
        level: "Intermediate / Advanced",
        duration: "200+ hours",
        price: "$399",
      },
      {
        id: "aws-hosting",
        title: "AWS Cloud Deployment & Microservices",
        level: "All Levels",
        duration: "50+ hours",
        price: "$199",
      },
    ],
  });
});

// Subscribe API
app.post("/api/subscribe", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required",
    });
  }

  return res.status(200).json({
    success: true,
    message: `Subscription successful for ${email}!`,
  });
});

// Contact API
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await transporter.sendMail({
      from: `"Nexagram Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `New Contact Message from ${name}`,

      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">

          <div style="background:#0d0d4f;padding:24px;color:#ffffff">
            <h2 style="margin:0">New Website Enquiry</h2>
            <p style="margin:8px 0 0;color:#58B947">
              Nexagram Contact Form
            </p>
          </div>

          <div style="padding:24px">

            <table style="width:100%;border-collapse:collapse">

              <tr>
                <td style="padding:10px 0;font-weight:bold;width:120px">
                  Name
                </td>
                <td>${name}</td>
              </tr>

              <tr>
                <td style="padding:10px 0;font-weight:bold">
                  Email
                </td>
                <td>${email}</td>
              </tr>

            </table>

            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0"/>

            <h3 style="margin-bottom:10px;color:#111827">
              Message
            </h3>

            <div style="background:#f9fafb;padding:16px;border-radius:8px;line-height:1.7;white-space:pre-wrap">
${message}
            </div>

          </div>

        </div>
      `,
    });

    res.status(200).json({
      success: true,
      message:
        "Thank you for reaching out! Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
});

// Frontend serving (Unified Server for Dev & Production)
const rootDir = path.resolve(__dirname, "..");
const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) {
  try {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: { server },
      },
      appType: "spa",
      root: rootDir,
    });
    app.use(vite.middlewares);
    console.log("⚡ Vite development middleware attached (HMR active)");
  } catch (error) {
    console.warn(
      "⚠️ Could not initialize Vite middleware, falling back to static dist serving:",
      error.message
    );
    const buildPath = path.join(rootDir, "dist");
    app.use(express.static(buildPath));
    app.use(express.static(path.join(rootDir, "public")));
    app.get("*", (req, res) => {
      if (req.path.startsWith("/api")) {
        return res.status(404).json({ error: "API endpoint not found" });
      }
      res.sendFile(path.join(buildPath, "index.html"));
    });
  }
} else {
  const buildPath = path.join(rootDir, "dist");
  app.use(express.static(buildPath));
  app.use(express.static(path.join(rootDir, "public")));

  app.get("*", (req, res) => {
    if (req.path.startsWith("/api")) {
      return res.status(404).json({
        error: "API endpoint not found",
      });
    }

    res.sendFile(path.join(buildPath, "index.html"), (err) => {
      if (err) {
        res
          .status(200)
          .send(
            "Nexagram Backend Service is running on http://localhost:" + PORT
          );
      }
    });
  });
}

server.listen(PORT, () => {
  console.log("===============================================");
  console.log(
    ` Nexagram Unified Server running (${isProduction ? "Production" : "Development"})`
  );
  console.log(` http://localhost:${PORT}`);
  console.log("===============================================");
});
