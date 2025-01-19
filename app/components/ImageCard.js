import Image from "next/image";

export default function ImageCard({ src, alt = "", className = "" }) {
  return (
    <>
      <div
        className={`bg-white p-5 rounded-xl border border-black flex items-center justify-center aspect-square  ${className}`}
      >
        <Image src={src} alt={alt} />
      </div>
    </>
  );
}
