import React from "react";
import Card from "@components/card";
import clsx from "clsx";

const Triangle = ({ dir = "left" }) => (
  <div
    className={clsx(
      `w-0 position-relative mx-auto
      border-0
      border-transparent `,
      dir === "right"
        ? "border-l-30 border-b-30 border-l-white border-r-white"
        : "border-r-30 border-b-30 border-l-white border-r-white"
    )}
  />
);

export default function Testimonial({
  author,
  children,
  width = "1/2",
  dir = "left",
}) {
  return (
    <div className={`md:w-${width} flex flex-col flex-grow flex-shrink`}>
      <Card className="flex-1">
        <div className="flex flex-col h-full relative">
          <p className="text-gray-800 z-10 italic text-center text-l">
            {children}
          </p>
        </div>
      </Card>
      <div className={dir === "right" ? "mr-24" : "ml-24"}>
        <Triangle dir={dir} />
        <p
          className={`text-lg text-center md:text-base font-bold text-gray-700 leading-tight mt-3 mb-6 ${
            dir === "right" ? "pr-4" : "pl-4"
          }`}
        >
          {author}
        </p>
      </div>
    </div>
  );
}
