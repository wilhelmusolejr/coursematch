export default function SectionContainer({ children, className }) {
  return (
    <>
      <div className={`container px-5 py-20  ${className}`}>{children}</div>
    </>
  );
}
