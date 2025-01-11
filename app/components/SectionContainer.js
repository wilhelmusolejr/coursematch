export default function SectionContainer({ children, className }) {
  return (
    <>
      <div className={`m-auto container px-5 md:px-10 py-24 ${className}`}>
        {children}
      </div>
    </>
  );
}
