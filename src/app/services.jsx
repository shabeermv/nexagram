"use client";

import React from "react";

import {
  MegaphoneIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CameraIcon,
  PaintBrushIcon,
  ChartBarIcon,
  CodeBracketIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    number: "01",
    icon: MegaphoneIcon,
    title: "Digital Marketing",
    description:
      "Build your digital presence with strategic marketing campaigns designed to increase visibility, engagement, and business growth.",
    features: [
      "Social Media Marketing",
      "Search Engine Optimization",
      "Google Ads & Paid Campaigns",
      "Content Marketing",
    ],
  },
  {
    number: "02",
    icon: GlobeAltIcon,
    title: "Web Development",
    description:
      "Create powerful, responsive, and high-performing websites that turn visitors into customers and strengthen your brand online.",
    features: [
      "Business Websites",
      "Corporate Websites",
      "E-commerce Development",
      "Responsive Web Design",
    ],
  },
  {
    number: "03",
    icon: PaintBrushIcon,
    title: "Branding & Design",
    description:
      "Build a memorable brand identity with creative visual solutions that communicate your values and connect with your audience.",
    features: [
      "Logo Design",
      "Brand Identity",
      "Creative Design",
      "Marketing Materials",
    ],
  },
  {
    number: "04",
    icon: CameraIcon,
    title: "Content & Media",
    description:
      "Tell your story through compelling content, professional visuals, and media strategies that capture attention.",
    features: [
      "Photography",
      "Video Production",
      "Social Media Content",
      "Creative Campaigns",
    ],
  },
  {
    number: "05",
    icon: ChartBarIcon,
    title: "Political Communication",
    description:
      "Strategic communication solutions that help campaigns, leaders, and organizations connect effectively with their audiences.",
    features: [
      "Election Campaigns",
      "Political PR",
      "Campaign Strategy",
      "Digital Outreach",
    ],
  },
  {
    number: "06",
    icon: UserGroupIcon,
    title: "Public Relations",
    description:
      "Strengthen your reputation and build meaningful relationships through strategic communication and public engagement.",
    features: [
      "Media Relations",
      "Corporate PR",
      "Reputation Management",
      "Public Communication",
    ],
  },
  {
    number: "07",
    icon: CodeBracketIcon,
    title: "Technology Solutions",
    description:
      "Use modern technology to streamline operations, improve customer experiences, and create scalable digital solutions.",
    features: [
      "Custom Web Applications",
      "Digital Platforms",
      "Business Solutions",
      "Technical Consulting",
    ],
  },
  {
    number: "08",
    icon: DevicePhoneMobileIcon,
    title: "Social Media Management",
    description:
      "Turn your social platforms into powerful communication channels with consistent, strategic, and engaging content.",
    features: [
      "Instagram Management",
      "Facebook Management",
      "Content Planning",
      "Community Management",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen overflow-hidden bg-white px-6 py-24 text-[#111111] md:px-12 lg:px-20"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#58B947]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#58B947]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#58B947]">
              What We Do
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
              Our <span className="text-[#58B947]">Services</span>
            </h1>
          </div>
        </div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-[#fafafa] p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#58B947]/50 hover:bg-white hover:shadow-xl"
              >
                {/* Number */}

                <div className="absolute right-6 top-5 text-5xl font-bold text-black/[0.04] transition-all duration-500 group-hover:text-[#58B947]/10">
                  {service.number}
                </div>

                {/* Green Glow */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#58B947]/10 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                {/* Icon */}

                <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-[#58B947]/20 bg-[#58B947]/10 transition-all duration-500 group-hover:border-[#58B947] group-hover:bg-[#58B947]">
                  <Icon className="h-7 w-7 text-[#58B947] transition-colors duration-500 group-hover:text-white" />
                </div>

                {/* Title */}

                <h2 className="relative mb-4 text-xl font-semibold text-[#111111]">
                  {service.title}
                </h2>

                {/* Description */}

                <p className="relative mb-6 text-sm leading-6 text-black/55">
                  {service.description}
                </p>

                {/* Features */}

                {/* <div className="relative space-y-2.5 border-t border-black/[0.08] pt-5">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-black/60"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#58B947]" />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div> */}

                {/* Bottom Hover Line */}

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#58B947] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
