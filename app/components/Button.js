"use client";

import Link from "next/link";

export default function Button({
  children,
  color = "secondary-color",
  className = "",
  onClick = null,
  type = "",
  href = "",
}) {
  if (type === "link") {
    return (
      <>
        <Link
          href={href}
          className={`inline-block cursor-pointer px-6 text-white py-4 rounded-3xl font-bold uppercase tracking-wider ${color} ${className}`}
          onClick={onClick}
        >
          {children}
        </Link>
      </>
    );
  }

  return (
    <>
      <div
        className={`inline-block cursor-pointer px-6 text-white py-4 rounded-3xl font-bold uppercase tracking-wider ${color} ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    </>
  );
}
