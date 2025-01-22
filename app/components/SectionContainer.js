export default function SectionContainer({ children, className, id = "" }) {
  return (
    <>
      <div
        id={`${id}`}
        className={`m-auto container px-5 md:px-10 py-24 ${className}`}
      >
        {children}
      </div>
    </>
  );
}
