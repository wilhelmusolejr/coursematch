export default function Input({
  type,
  name,
  id,
  value = "",
  onChange = function () {},
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className="border border-black rounded-md p-2 w-full"
    />
  );
}
