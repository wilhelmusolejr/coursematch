export default function Input({ type, name, id }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="border border-black rounded-md p-2 w-full"
    />
  );
}
