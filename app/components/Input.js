export default function Input({
  type,
  name,
  id,
  value = "",
  required = false,
  onChange = function () {},
  className = "",
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className={`border border-black rounded-md p-2 w-full ${className} `}
    />
  );
}
