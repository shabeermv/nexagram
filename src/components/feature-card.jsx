import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

export function FeatureCard({ icon: Icon, title, children }) {
  return (
    <Card color="transparent" shadow={false} className="rounded-xl">
      <CardBody className="p-0">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
          {Icon && <Icon className="h-6 w-6" />}
        </div>

        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>

        <Typography className="font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default FeatureCard;
