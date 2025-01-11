import Image from "next/image";

export default function ImageCard({ src, alt = "" }) {
  return (
    <>
      <div className="bg-white p-5 rounded-xl w-52 h-52 flex items-center justify-center">
        <Image src={src} alt={alt} />
      </div>
    </>
  );
}
