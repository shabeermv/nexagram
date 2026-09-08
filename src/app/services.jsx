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
    icon: MegaphoneIcon,
    title: "Digital Marketing",
  },
  {
    icon: GlobeAltIcon,
    title: "Web Development",
  },
  {
    icon: PaintBrushIcon,
    title: "Branding & Design",
  },
  {
    icon: CameraIcon,
    title: "Content & Media",
  },
  {
    icon: ChartBarIcon,
    title: "Political Communication",
  },
  {
    icon: UserGroupIcon,
    title: "Public Relations",
  },
  {
    icon: CodeBracketIcon,
    title: "Technology Solutions",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Social Media Management",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-6 py-20 text-[#111111] md:px-12 lg:px-20"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#58B947]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#58B947]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Services Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative flex min-h-[100px] items-center gap-4 overflow-hidden rounded-2xl border border-black/[0.08] bg-[#fafafa] px-6 py-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#58B947]/50 hover:bg-white hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#58B947]/20 bg-[#58B947]/10 transition-all duration-500 group-hover:border-[#58B947] group-hover:bg-[#58B947]">
                  <Icon className="h-6 w-6 text-[#58B947] transition-colors duration-500 group-hover:text-white" />
                </div>

                {/* Service Title */}
                <h2 className="text-lg font-semibold leading-snug text-[#111111] transition-colors duration-300 group-hover:text-[#58B947]">
                  {service.title}
                </h2>

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
