import Image from "next/image";

export default function ImageCard({ src, alt = "" }) {
  return (
    <>
      <div className="bg-white p-5 rounded-xl border border-black flex items-center justify-center aspect-square">
        <Image src={src} alt={alt} />
      </div>
    </>
  );
}
