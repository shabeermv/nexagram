import React from "react";
import { Typography } from "@material-tailwind/react";

export function BackgroundCard({ title, children }) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl bg-white shadow-md">
      <div className="p-6">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>

        <div>{children}</div>
      </div>
    </div>
  );
}

export default BackgroundCard;
