"use client";

import React, { useState } from "react";

import { Typography, Button, Input } from "@material-tailwind/react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "All fields are required.",
      });

      return;
    }

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: data.message || "Message sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message:
          "Failed to connect to the backend server. Please make sure the server is running.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full overflow-hidden bg-white">
      <section
        id="contact"
        className="relative overflow-hidden bg-white px-6 py-20 sm:px-8 md:py-24"
      >
        {/* Background X */}
        <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 text-[350px] font-black leading-none text-[#58B947]/[0.025] md:text-[500px]">
          X
        </div>

        <div className="container relative z-10 mx-auto max-w-6xl">
          {/* Main Contact Card */}
          <div className="grid overflow-hidden rounded-[32px] bg-[#0d0d4f] shadow-2xl lg:grid-cols-2">
            {/* =====================================================
                LEFT SIDE
            ====================================================== */}
            <div className="relative flex flex-col justify-center px-8 py-14 sm:px-12 md:px-16 md:py-16">
              {/* Glow */}
              <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-[#58B947]/20 blur-[100px]" />

              <div className="relative z-10">
                {/* Small Heading */}
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#58B947]">
                  Let's Create
                </span>

                {/* Main Heading */}
                <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                  Let's build something{" "}
                  <span className="text-[#58B947]">meaningful.</span>
                </h2>

                {/* Description */}
                <p className="mt-6 max-w-lg text-sm leading-7 text-white/50 sm:text-base">
                  Powerful ideas become powerful experiences when strategy,
                  creativity and technology work together.
                </p>

                {/* Divider */}
                <div className="my-10 h-px w-full max-w-md bg-white/10" />

                {/* Contact Text */}
                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/30">
                      Have a project?
                    </p>

                    <p className="mt-2 text-lg font-medium text-white">
                      Let's talk about it.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/30">
                      Email
                    </p>

                    <a
                      href="mailto:hello@nexagram.com"
                      className="mt-2 inline-block text-sm text-white/70 transition-colors hover:text-[#58B947]"
                    >
                      hello@nexagram.com
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-10">
                  <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                    Follow Us
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {/* Instagram */}
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#58B947] hover:bg-[#58B947] hover:text-white"
                    >
                      <FaInstagram className="h-4 w-4" />
                    </a>

                    {/* Facebook */}
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#58B947] hover:bg-[#58B947] hover:text-white"
                    >
                      <FaFacebookF className="h-4 w-4" />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#58B947] hover:bg-[#58B947] hover:text-white"
                    >
                      <FaLinkedinIn className="h-4 w-4" />
                    </a>

                    {/* YouTube */}
                    <a
                      href="#"
                      aria-label="YouTube"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#58B947] hover:bg-[#58B947] hover:text-white"
                    >
                      <FaYoutube className="h-4 w-4" />
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="#"
                      aria-label="WhatsApp"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#58B947] hover:bg-[#58B947] hover:text-white"
                    >
                      <FaWhatsapp className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT SIDE — CONTACT FORM
            ====================================================== */}
            <div className="bg-gray-50 px-7 py-12 sm:px-10 md:px-14 md:py-16">
              {/* Form Heading */}
              <div className="mb-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-[1px] w-10 bg-[#58B947]" />

                  <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#58B947]">
                    Get In Touch
                  </span>
                </div>

                <Typography
                  variant="h2"
                  color="blue-gray"
                  className="mb-3 !text-3xl font-semibold md:!text-4xl"
                >
                  Contact Us
                </Typography>

                <Typography
                  variant="lead"
                  className="!text-sm !leading-7 !text-gray-500"
                >
                  Have questions about our services, digital strategies, or
                  business solutions? Send us a message and our team will get
                  back to you shortly.
                </Typography>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium"
                    color="blue-gray"
                  >
                    Your Name
                  </Typography>

                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    label="Full Name"
                    color="gray"
                    size="lg"
                    crossOrigin=""
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium"
                    color="blue-gray"
                  >
                    Your Email
                  </Typography>

                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    label="email@example.com"
                    color="gray"
                    size="lg"
                    crossOrigin=""
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium"
                    color="blue-gray"
                  >
                    Message
                  </Typography>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-lg border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-2 focus:border-gray-900"
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <div
                    className={`rounded-lg border p-4 text-left text-sm transition-all duration-300 ${
                      status.type === "success"
                        ? "border-green-200 bg-green-50 text-green-800"
                        : "border-red-200 bg-red-50 text-red-800"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  color="gray"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 !bg-[#58B947] py-3 text-sm font-semibold normal-case shadow-none transition-all hover:!bg-[#469b38] hover:shadow-lg"
                >
                  {loading ? (
                    <>
                      <svg
                        className="h-5 w-5 animate-spin text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />

                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
