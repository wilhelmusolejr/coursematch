export default function Label({ htmlFor, children, required = false }) {
  return (
    <label htmlFor={htmlFor} className="capitalize">
      {children} {required && <span className="text-red-500">*</span>}
    </label>
  );
}
