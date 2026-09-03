import React from "react";

import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button,
} from "@material-tailwind/react";

export function CourseCard({ img, title, desc, buttonLabel }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader
        floated={false}
        className="mx-0 mt-0 mb-6 h-64 overflow-hidden"
      >
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover grayscale opacity-90"
        />
      </CardHeader>

      <CardBody className="p-0">
        <a
          href="#"
          className="!no-underline text-blue-gray-900 transition-colors hover:!no-underline hover:text-gray-800"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography
            variant="h6"
            className="mb-2 !no-underline !text-gray-700 !font-normal tracking-normal"
          >
            {title}
          </Typography>
        </a>

        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default CourseCard;
