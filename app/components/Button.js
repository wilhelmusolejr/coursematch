export default function Button({
  children,
  color = "secondary-color",
  className = "",
}) {
  return (
    <>
      <div
        className={`inline-block px-6 text-white py-3 rounded-3xl font-bold uppercase tracking-wider ${color} ${className}`}
      >
        {children}
      </div>
    </>
  );
}
