"use client";

export default function Button({
  children,
  color = "secondary-color",
  className = "",
  onClick = null,
}) {
  return (
    <>
      <div
        className={`inline-block cursor-pointer px-6 text-white py-3 rounded-3xl font-bold uppercase tracking-wider ${color} ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    </>
  );
}
