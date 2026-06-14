import React from "react";

interface TimestampProps {
  date?: string;
  hour?: string;
  minute?: string;
  meridiem?: "AM" | "PM";
}

export default function Timestamp({
  date = "Jan 1, 2026",
  hour = "12",
  minute = "00",
  meridiem = "AM",
}: TimestampProps) {
  // Build a formatted timestamp matching: "12:00 AM · Jan 1, 2026"
  const formattedTime = `${hour}:${minute} ${meridiem}`;
  const formattedDate = date || "Jan 1, 2026";

  return (
    <div className="w-full mt-4 pb-4 border-b border-[#E2E8F0] text-sm text-[#64748B] flex flex-wrap items-center gap-1 leading-5">
      <span>{formattedTime}</span>
      <span aria-hidden="true" className="mx-0.5">·</span>
      <span>{formattedDate}</span>
    </div>
  );
}
