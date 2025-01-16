import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo.png";

import { Coiny } from "next/font/google";
const coiny = Coiny({
  subsets: ["latin"], // Or other subsets as needed
  weight: "400", // Or other weights like '700', 'regular', etc.
  display: "swap", // Important for performance
});

export default function Logo() {
  return (
    <Link href="/" className="logo flex gap-2   items-center">
      <Image src={logo} alt="My Image" width={50} height={50} />
      <h1
        className={`${coiny.className} lg:text-2xl xl:text-3xl text-xl pt-2 tracking-wider`}
      >
        CourseMatch
      </h1>
    </Link>
  );
}
