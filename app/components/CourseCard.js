export default function CourseCard({ children, className = "" }) {
  return (
    <div className={`max-w-72 p-5 rounded-xl ${className}`}>{children}</div>
  );
}
