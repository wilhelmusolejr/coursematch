export default function SectionHeading({ overlineText, headingText }) {
  return (
    <div className="heading text-center mb-12">
      <div className="inline-block px-6 py-3 rounded-3xl capitalize mb-3 primary-color-light primary-text-color">
        {overlineText}
      </div>
      <h2 className="capitalize  font-bold text-2xl">{headingText}</h2>
    </div>
  );
}
