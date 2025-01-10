export default function Button({ children, color = "secondary-color" }) {
  return (
    <>
      <div
        className={`inline-block px-6 py-3 rounded-3xl font-bold uppercase tracking-wider ${color}`}
      >
        {children}
      </div>
    </>
  );
}
